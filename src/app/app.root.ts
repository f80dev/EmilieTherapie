import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppRoot implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    // Le SeoService s'abonne au Router dans son constructeur ;
    // cet appel initialise la première pose de balises pour le rendu SSR/initial.
    this.seo.update('/');
  }
}
