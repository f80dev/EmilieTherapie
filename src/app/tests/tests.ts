import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
  templateUrl: './tests.html',
  styleUrl: './tests.scss',
})
export class Tests {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  sendTestEmail() {
    const url = '/api/email/send';
    this.http.post(url, {
      to: 'test@example.com',
      subject: 'Test Email',
      body: 'This is a test email from EmilieTherapie'
    }).subscribe({
      next: () => {
        this.snackBar.open('Email envoyé avec succès', 'Fermer', { duration: 3000 });
      },
      error: (err) => {
        this.snackBar.open('Erreur lors de l\'envoi: ' + err.message, 'Fermer', { duration: 5000 });
      },
    });
  }
}
