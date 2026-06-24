import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-versionslegales',
  imports: [CommonModule, RouterModule],
  templateUrl: './versionslegales.html',
  styleUrl: './versionslegales.scss',
})
export class Versionslegales implements OnInit {
  currentPage: string = 'cgv';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['page'] || 'cgv';
    });
  }

  getPageTitle(): string {
    const titles: Record<string, string> = {
      'cgv': 'Conditions Générales de Vente',
      'cgu': 'Conditions Générales d\'Utilisation',
      'politique-confidentialite': 'Politique de Confidentialité',
      'politique-cookies': 'Politique de Cookies',
    };
    return titles[this.currentPage] || 'Document Legal';
  }
}
