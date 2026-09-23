import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

export interface LongueurOption {
  id: string;
  label: string;
  mots: string;
}

export interface ReseauOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-billet-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './billet-dialog.html',
  styleUrl: './billet-dialog.scss',
})
export class BilletDialog {
  private dialogRef = inject(MatDialogRef<BilletDialog>);
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  /** Skill de rédaction servi depuis le répertoire public */
  private readonly SKILL_URL = 'data/skill_billet.md';

  // Champs du billet
  cible = signal('');
  sujet = signal('');
  longueur = signal<LongueurOption | null>(null);
  reseau = signal<ReseauOption | null>(null);

  // Prompt fabriqué (éditable avant copie)
  prompt = signal('');
  generating = signal(false);

  readonly longueurs: LongueurOption[] = [
    { id: 'court', label: 'Court', mots: '80 à 120 mots' },
    { id: 'moyen', label: 'Moyen', mots: '200 à 300 mots' },
    { id: 'long', label: 'Long', mots: '400 à 600 mots' },
  ];

  readonly reseaux: ReseauOption[] = [
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'x', label: 'X (Twitter)' },
    { id: 'tiktok', label: 'TikTok' },
    { id: 'threads', label: 'Threads' },
    { id: 'bluesky', label: 'Bluesky' },
    { id: 'mastodon', label: 'Mastodon' },
  ];

  isFormValid(): boolean {
    return !!(
      this.cible().trim() &&
      this.sujet().trim() &&
      this.longueur() &&
      this.reseau()
    );
  }

  fabriquerPrompt(): void {
    if (!this.isFormValid() || this.generating()) return;
    this.generating.set(true);
    this.http.get(this.SKILL_URL, { responseType: 'text' }).subscribe({
      next: (skill) => {
        this.prompt.set(this.buildPrompt(skill));
        this.generating.set(false);
      },
      error: (err) => {
        console.error('Skill de rédaction introuvable:', err);
        this.generating.set(false);
        this.snackBar.open(
          'Impossible de charger le skill de rédaction (data/skill_billet.md)',
          'Fermer',
          { duration: 4000 },
        );
      },
    });
  }

  private buildPrompt(skill: string): string {
    const longueur = this.longueur()!;
    const reseau = this.reseau()!;
    return `# Rôle
Tu es rédacteur expert des réseaux sociaux pour un cabinet de psychothérapie. Tu rédiges un billet prêt à publier pour le compte d'Émilie Pommier, thérapeute.

# Contexte et règles de rédaction (skill « billets réseaux sociaux »)
${skill.trim()}

# Brief
- Réseau social visé : ${reseau.label}
- Longueur demandée : ${longueur.label} (${longueur.mots})
- Sujet principal : ${this.sujet().trim()}
- Cible (profil des lecteurs visés) : ${this.cible().trim()}

# Consignes de rédaction
1. Adresse-toi directement à la cible décrite ci-dessus, à partir de son vécu quotidien.
2. Applique strictement le ton, la structure et les garde-fous déontologiques du skill ci-dessus.
3. Respecte les contraintes de format du réseau ${reseau.label} (limite de caractères, hashtags, emojis) et la longueur demandée à ± 10 % près.
4. Termine par l'appel à l'action prévu dans le skill.
5. N'invente aucune donnée personnelle, aucun témoignage, aucune promesse de guérison.

# Format de sortie
Livre uniquement le billet, prêt à publier, sans commentaire ni titre de section.`;
  }

  async copierPrompt(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.prompt());
      this.snackBar.open('Prompt copié dans le presse-papiers', 'Fermer', {
        duration: 3000,
      });
    } catch {
      this.snackBar.open(
        'Copie impossible — sélectionnez le texte manuellement',
        'Fermer',
        { duration: 4000 },
      );
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
