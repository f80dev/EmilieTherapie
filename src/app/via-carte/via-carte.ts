import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnalyticsService } from '../analytics.service';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

/**
 * Page /via-carte — landing dédiée aux scans QR depuis les cartes de visite.
 *
 * Affiche une introduction simple avec la photo d'Emilie,
 * puis redirige automatiquement vers la section rdv du site principal.
 */
@Component({
  selector: 'app-via-carte',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon],
  templateUrl: './via-carte.html',
  styleUrl: './via-carte.scss',
})
export class ViaCarte implements OnInit {
  private router = inject(Router);
  protected analytics = inject(AnalyticsService);

  ngOnInit(): void {
    this.analytics.track('landing_via_carte');
    // Redirection automatique vers la section rdv après 10 secondes
    setTimeout(() => {
      this.router.navigate(['/'], { fragment: 'rdv' });
    }, 7000);
  }

  goto_home() {
    this.router.navigate(['/'], { fragment: 'rdv' });
  }
}
