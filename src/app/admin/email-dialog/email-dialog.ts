import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-email-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
  ],
  templateUrl: './email-dialog.html',
  styleUrl: './email-dialog.scss',
})
export class EmailDialog {
  private dialogRef = inject(MatDialogRef<EmailDialog>);

  emailBody: string = '';

  onCancel(): void {
    this.dialogRef.close();
  }

  onSend(): void {
    this.dialogRef.close(this.emailBody);
  }
}
