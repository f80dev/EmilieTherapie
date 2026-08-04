import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmailDialog } from './email-dialog/email-dialog';
import * as QRCode from 'qrcode';

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
    MatDialogModule,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  pendingEvents = signal<CalendarEvent[]>([]);
  loading = signal(false);
  lastQrCodeUrl = signal<string>('');

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

  sendEmail(event: CalendarEvent) {
    const dialogRef = this.dialog.open(EmailDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.post('/api/sendemail', { event_id: event.id, body: result }).subscribe({
          next: () => {
            this.snackBar.open('Email envoyé', 'Fermer', { duration: 3000 });
          },
          error: (err) => {
            console.error('Failed to send email:', err);
            this.snackBar.open('Erreur lors de l\'envoi de l\'email', 'Fermer', { duration: 3000 });
          }
        });
      }
    });
  }

  generateQrCode() {
    const timestamp = Date.now().toString(16);
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/via-carte?t=${timestamp}`;
    this.lastQrCodeUrl.set(url);

    QRCode.toDataURL(url, { width: 512, margin: 2 }).then((dataUrl:any) => {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `qrcode-carte-${timestamp}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.snackBar.open('QR Code généré et téléchargé', 'Fermer', { duration: 3000 });
    }).catch((err:any) => {
      console.error('Failed to generate QR code:', err);
      this.snackBar.open('Erreur lors de la génération du QR code', 'Fermer', { duration: 3000 });
    });
  }
}
