import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export interface ConfirmRdvDialogData {
  dateStr: string;
  heure: string;
  duree: number;
  typeSeance: string;
  medium: 'presentiel' | 'distant';
  lieuNom?: string;
  lieuAdresse?: string;
}

@Component({
  selector: 'app-confirm-rdv-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIcon],
  templateUrl: './confirm-rdv-dialog.html',
  styleUrl: './confirm-rdv-dialog.scss',
})
export class ConfirmRdvDialog {
  private dialogRef = inject(MatDialogRef<ConfirmRdvDialog>);
  data: ConfirmRdvDialogData = inject(MAT_DIALOG_DATA);

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}