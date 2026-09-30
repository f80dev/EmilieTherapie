import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface PsybotSource {
  title: string;
  source: string;
  score: number;
}

interface PsybotTurn {
  role: 'user' | 'bot';
  text: string;
  sources?: PsybotSource[];
  emergency?: boolean;
  ts: number;
}

@Component({
  selector: 'app-psybot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './psybot.html',
  styleUrl: './psybot.scss',
})
export class Psybot {
  private readonly http = inject(HttpClient);
  private readonly snack = inject(MatSnackBar);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly draft = signal('');
  protected readonly busy = signal(false);
  protected readonly turns = signal<PsybotTurn[]>([]);
  protected readonly sessionId = signal(this._newSession());

  @ViewChild('scroll', { static: false })
  private scrollEl?: ElementRef<HTMLDivElement>;

  constructor() {
    // Auto-scroll on every new turn
    effect(() => {
      this.turns();
      queueMicrotask(() => this._scrollToBottom());
    });
  }

  protected async send(): Promise<void> {
    const text = this.draft().trim();
    if (!text || this.busy()) return;
    if (text.length > 1500) {
      this.snack.open('Message trop long (1500 caractères max).', 'OK', { duration: 3500 });
      return;
    }

    this.turns.update((t) => [...t, { role: 'user', text, ts: Date.now() }]);
    this.draft.set('');
    this.busy.set(true);

    try {
      const history = this.turns()
        .slice(-6, -1) // 3 derniers échanges user/assistant, sans le tour courant
        .map((t) => ({ role: t.role === 'user' ? 'user' : 'assistant', content: t.text }));

      const res = await firstValueFrom(
        this.http.post<{ answer: string; sources: PsybotSource[]; emergency: boolean }>(
          '/api/psybot/chat',
          { message: text, session_id: this.sessionId(), history },
        ),
      );

      this.turns.update((t) => [
        ...t,
        {
          role: 'bot',
          text: res.answer,
          sources: res.sources,
          emergency: res.emergency,
          ts: Date.now(),
        },
      ]);
    } catch (e: any) {
      this.snack.open(
        'Le psybot est momentanément indisponible. Réessayez dans quelques instants.',
        'OK',
        { duration: 5000 },
      );
      this.turns.update((t) => [
        ...t,
        {
          role: 'bot',
          text:
            "Je suis désindisponible. Si vous traversez une période difficile, le **3114** " +
            "(numéro national de prévention du suicide) est joignable 24h/24, 7j/7.",
          ts: Date.now(),
        },
      ]);
    } finally {
      this.busy.set(false);
    }
  }

  protected onKeydown(ev: KeyboardEvent): void {
    if (ev.key === 'Enter' && !ev.shiftKey) {
      ev.preventDefault();
      void this.send();
    }
  }

  protected resetConversation(): void {
    this.turns.set([]);
    this.sessionId.set(this._newSession());
  }

  private _newSession(): string {
    if (!isPlatformBrowser(this.platformId)) return 'ssr';
    // RFC4122 v4-ish — no crypto needed for non-identifying session grouping
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private _scrollToBottom(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.scrollEl?.nativeElement;
    if (el) el.scrollTop = el.scrollHeight;
  }
}