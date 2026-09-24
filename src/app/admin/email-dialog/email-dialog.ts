import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { QuillEditorComponent, QuillModules } from 'ngx-quill';

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
    QuillEditorComponent,
  ],
  templateUrl: './email-dialog.html',
  styleUrl: './email-dialog.scss',
})
export class EmailDialog {
  private dialogRef = inject(MatDialogRef<EmailDialog>);
  data: EmailDialogData = inject(MAT_DIALOG_DATA);

  emailBody: string = this.data?.emailBody || '';
  isPreview: boolean = this.data?.isPreview || false;

  editorModules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['link'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, false] }],
      ['clean'],
    ],
  };

  isBodyEmpty(): boolean {
    return !this.emailBody.replace(/<[^>]*>/g, '').trim();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSend(): void {
    this.dialogRef.close(this.emailBody);
  }
}
