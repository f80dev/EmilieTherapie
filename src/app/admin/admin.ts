import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

interface CalendarEvent {
  id: string;
  summary: string;
  description: string;
  start: string;
  end: string;
  status: string;
  colorId: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  pendingEvents = signal<CalendarEvent[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.loadPendingEvents();
  }

  loadPendingEvents() {
    this.loading.set(true);
    this.http.get<CalendarEvent[]>('/api/calendar/list').subscribe({
      next: (events) => {
        this.pendingEvents.set(events);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load pending events:', err);
        this.loading.set(false);
        this.snackBar.open('Erreur lors du chargement des événements', 'Fermer', {
          duration: 3000,
        });
      }
    });
  }

  formatDateTime(dateTimeStr: string): string {
    if (!dateTimeStr) return '';
    const date = new Date(dateTimeStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getEventDetails(description: string): { email: string; phone: string; type: string } {
    const lines = description.split('\n');
    const details = { email: '', phone: '', type: '' };
    for (const line of lines) {
      if (line.startsWith('Email: ')) details.email = line.replace('Email: ', '');
      if (line.startsWith('Téléphone: ')) details.phone = line.replace('Téléphone: ', '');
      if (line.startsWith('Type: ')) details.type = line.replace('Type: ', '');
    }
    return details;
  }

  confirmEvent(event: CalendarEvent) {
    this.http.post(`/api/calendar/confirm/${event.id}`, {}).subscribe({
      next: () => {
        this.snackBar.open('Événement confirmé', 'Fermer', { duration: 3000 });
        this.loadPendingEvents();
      },
      error: (err) => {
        console.error('Failed to confirm event:', err);
        this.snackBar.open('Erreur lors de la confirmation', 'Fermer', { duration: 3000 });
      }
    });
  }

  cancelEvent(event: CalendarEvent) {
    this.http.delete(`/api/calendar/events/${event.id}`).subscribe({
      next: () => {
        this.snackBar.open('Événement annulé', 'Fermer', { duration: 3000 });
        this.loadPendingEvents();
      },
      error: (err) => {
        console.error('Failed to cancel event:', err);
        this.snackBar.open('Erreur lors de l\'annulation', 'Fermer', { duration: 3000 });
      }
    });
  }
}
