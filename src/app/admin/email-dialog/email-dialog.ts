import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

export interface EmailDialogData {
  emailBody: string;
  isPreview?: boolean;
}

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
  data: EmailDialogData = inject(MAT_DIALOG_DATA);

  emailBody: string = this.data?.emailBody || '';
  isPreview: boolean = this.data?.isPreview || false;

  onCancel(): void {
    this.dialogRef.close();
  }

  onSend(): void {
    this.dialogRef.close(this.emailBody);
  }
}
