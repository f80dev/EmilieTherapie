import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '../analytics.service';

/**
 * Page /via-carte — landing dédiée aux scans QR depuis les cartes de visite.
 *
 * UX : on minimise le bruit, on maximise la conversion.
 *   - Hero court (vous avez ma carte → on se connaît déjà)
 *   - 3 preuves rapides (institution, méthode, formats)
 *   - CTA unique : choisir un créneau
 *   - Tracking : chaque étape est tracée via AnalyticsService.
 */
@Component({
  selector: 'app-via-carte',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  ],
  templateUrl: './via-carte.html',
  styleUrl: './via-carte.scss',
})
export class ViaCarte implements OnInit {
  private http = inject(HttpClient);
  protected analytics = inject(AnalyticsService);

  // Quick-load CTA : on lit l'UTM et on tag la session "via-carte"
  ngOnInit(): void {
    this.analytics.track('landing_via_carte');
    // Scroll automatique au formulaire
    setTimeout(() => this.scrollToRdv(), 400);
  }

  scrollToRdv(): void {
    const el = document.getElementById('vc-rdv');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.analytics.viewRdvSection();
  }

  // ---------------------- Booking form (light) ----------------------

  nom = signal('');
  prenom = signal('');
  email = signal('');
  telephone = signal('');
  message = signal('');
  selectedDate = signal<Date | null>(null);
  selectedTime = signal<string>('');
  seanceType = signal<'presentiel' | 'distant'>('presentiel');
  acceptTerms = signal(false);
  loadingSlots = signal(false);
  busySlots = signal<Map<string, string[]>>(new Map());

  // 75-min slots from 8h to 20h
  timeSlots: string[] = [
    '08:00', '09:15', '10:30', '11:45',
    '13:00', '14:15', '15:30', '16:45',
    '18:00', '19:15',
  ];

  isFormValid(): boolean {
    return (
      this.nom().trim().length > 0 &&
      this.prenom().trim().length > 0 &&
      this.email().trim().length > 0 &&
      this.email().includes('@') &&
      this.telephone().trim().length > 0 &&
      this.selectedDate() !== null &&
      this.selectedTime() !== '' &&
      this.acceptTerms()
    );
  }

  isSlotAvailable(time: string): boolean {
    if (!this.selectedDate()) return false;
    const key = this.selectedDate()!.toISOString().split('T')[0];
    return !(this.busySlots().get(key) ?? []).includes(time);
  }

  availableSlots(): string[] {
    if (!this.selectedDate()) return [];
    const key = this.selectedDate()!.toISOString().split('T')[0];
    const busy = this.busySlots().get(key) ?? [];
    return this.timeSlots.filter((s) => !busy.includes(s));
  }

  selectTimeSlot(time: string): void {
    if (this.isSlotAvailable(time)) this.selectedTime.set(time);
  }

  onDateSelected(date: Date | null): void {
    this.selectedDate.set(date);
    this.selectedTime.set('');
    if (!date) return;
    this.analytics.viewCalendar();
    this.loadingSlots.set(true);
    const start = date.toISOString().split('T')[0];
    const end = new Date(date);
    end.setDate(end.getDate() + 1);
    const endStr = end.toISOString().split('T')[0];
    this.http
      .get<{ busy: { date: string; times: string[] }[] }>(
        `/api/calendar/busy?start=${start}&end=${endStr}`,
      )
      .subscribe({
        next: (res) => {
          const map = new Map(this.busySlots());
          for (const day of res.busy ?? []) map.set(day.date, day.times);
          this.busySlots.set(map);
          this.loadingSlots.set(false);
        },
        error: () => this.loadingSlots.set(false),
      });
  }

  submit(): void {
    if (!this.isFormValid()) return;

    const date = this.selectedDate();
    const dateStr = date?.toLocaleDateString('fr-FR', {
      weekday: 'long', day: 'numeric', month: 'long',
    }) ?? '';
    const seanceLabel =
      this.seanceType() === 'distant'
        ? 'À distance (visioconférence)'
        : 'En présentiel (cabinet, Paris 10e)';

    const [hh, mm] = this.selectedTime().split(':').map(Number);
    const startDt = new Date(date!);
    startDt.setHours(hh, mm, 0, 0);
    const endDt = new Date(startDt);
    endDt.setMinutes(endDt.getMinutes() + 60);

    const iso = (d: Date) => d.toISOString().slice(0, 19) + '+02:00';

    this.http
      .post('/api/calendar/add-to-calendar', {
        title: `RDV: ${this.prenom()} ${this.nom()} — ${dateStr} à ${this.selectedTime()}`,
        start_time: iso(startDt),
        end_time: iso(endDt),
        description: `Type: ${seanceLabel}\nEmail: ${this.email()}\nTéléphone: ${this.telephone()}\nMessage: ${this.message()}`,
        email: this.email(),
        phone: this.telephone(),
        seance_type: seanceLabel,
      })
      .subscribe({
        next: () => {
          this.analytics.leadCaptured('card_visit');
          this.message.set('');
          this.selectedDate.set(null);
          this.selectedTime.set('');
          this.acceptTerms.set(false);
          this.confirmation.set(true);
        },
        error: () => {
          this.analytics.track('lead_capture_failed');
        },
      });
  }

  // ---------------------- UI state ----------------------

  confirmation = signal(false);

  getMinDate(): Date {
    return new Date();
  }
  getMaxDate(): Date {
    const d = new Date();
    d.setMonth(d.getMonth() + 2);
    return d;
  }
}