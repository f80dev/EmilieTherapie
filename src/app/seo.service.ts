import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * SEO service : pose <title>, <meta description>, <link rel=canonical> et
 * open-graph/twitter au moment de chaque navigation, sans changer le contenu
 * visuel rendu par les composants.
 *
 * Chaque route reste responsable de son contenu visible. Ce service se charge
 * uniquement du balisage head et des liens canoniques.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  private readonly siteUrl = 'https://emiliepommier.fr';
  private readonly siteName = 'Emilie Pommier — Psychothérapie';
  private readonly defaultTitle = 'Emilie Pommier — Psychothérapeute Intelligence Relationnelle Paris 10e | RDV en ligne';
  private readonly defaultDescription =
    "Emilie Pommier, psychothérapeute à Paris 10e. Intelligence Relationnelle de François Le Doze : guérison des blessures psychiques par l'engagement thérapeutique conscient. RDV en ligne.";
  private readonly defaultImage = `${this.siteUrl}/og-image.jpg`;

  private currentCanonical?: HTMLLinkElement;

  /** Mapping des chemins Angular -> métadonnées SEO spécifiques */
  private readonly routeMeta: Record<string, { title: string; description: string }> = {
    '/': {
      title: 'Emilie Pommier — Psychothérapeute Intelligence Relationnelle Paris 10e | RDV en ligne',
      description:
        'Emilie Pommier, psychothérapeute à Paris 10e. Intelligence Relationnelle de François Le Doze : guérison des blessures psychiques par l\'engagement thérapeutique conscient. RDV en ligne.',
    },
    '/parcours': {
      title: 'Mon parcours de psychothérapeute | Emilie Pommier — Paris 10e',
      description:
        "Le parcours d'Emilie Pommier : formation, supervision, approche de l'Intelligence Relationnelle (François Le Doze) et cadre déontologique de la psychothérapie à Paris 10e.",
    },
    '/tarifs': {
      title: 'Tarifs et modalités | Emilie Pommier — Psychothérapeute Paris 10e',
      description:
        "Tarifs des séances de psychothérapie en cabinet (Paris 10e) et en visio : durées, fréquence recommandée, moyens de paiement et conditions d'annulation.",
    },
    '/mentionslegales': {
      title: 'Mentions légales | Emilie Pommier — Psychothérapeute Paris',
      description:
        "Mentions légales du site emiliepommier.fr : éditeur, hébergeur, propriété intellectuelle et responsabilité professionnelle d'Emilie Pommier, psychothérapeute.",
    },
    '/politiquedeconfidentialite': {
      title: 'Politique de confidentialité | Emilie Pommier — Psychothérapie Paris',
      description:
        "Politique de confidentialité d'emiliepommier.fr : données collectées, durée de conservation, droits RGPD et contact DPO.",
    },
    '/versionslegales/cgv': {
      title: 'Conditions générales de vente | Emilie Pommier — Psychothérapie',
      description:
        'Conditions générales de vente des séances de psychothérapie proposées par Emilie Pommier : tarif, règlement, annulation, rétractation.',
    },
    '/admin': {
      title: 'Administration',
      description: 'Espace administration du site.',
    },
    '/tests': {
      title: 'Tests',
      description: 'Page de tests techniques.',
    },
  };

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.apply(e.urlAfterRedirects));
  }

  /** Force la mise à jour depuis un composant (utile pour les fragments / une ancre) */
  public update(urlPath: string): void {
    this.apply(urlPath);
  }

  private apply(pathWithQuery: string): void {
    const [pathOnly] = pathWithQuery.split('?');
    const normalized = pathOnly.replace(/\/+$/, '') || '/';
    const meta = this.routeMeta[normalized] ?? this.routeMeta['/'];

    // --- Title
    this.title.setTitle(meta.title);

    // --- Meta description
    this.meta.updateTag({ name: 'description', content: meta.description });
    this.meta.updateTag({ name: 'keywords', content: this.defaultKeywordsFor(normalized) });

    // --- Open Graph
    const fullUrl = `${this.siteUrl}${normalized === '/' ? '/' : normalized}`;
    this.meta.updateTag({ property: 'og:title', content: meta.title });
    this.meta.updateTag({ property: 'og:description', content: meta.description });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: this.defaultImage });

    // --- Twitter
    this.meta.updateTag({ name: 'twitter:title', content: meta.title });
    this.meta.updateTag({ name: 'twitter:description', content: meta.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.defaultImage });

    // --- Canonical
    this.setCanonical(fullUrl);
  }

  private setCanonical(url: string): void {
    if (this.currentCanonical) {
      this.currentCanonical.setAttribute('href', url);
      return;
    }
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    this.currentCanonical = link;
  }

  private defaultKeywordsFor(path: string): string {
    const base = 'psychothérapeute Paris, psychothérapie Paris 10e, Intelligence Relationnelle, François Le Doze, engagement thérapeutique conscient, guérison trauma, dissociation, blessure psychique';
    const extra: Record<string, string> = {
      '/parcours': 'parcours psychothérapeute, formation, supervision, déontologie',
      '/tarifs': 'tarifs psychothérapie, prix séance psy, séance visio, séance cabinet',
      '/mentionslegales': 'mentions légales',
      '/politiquedeconfidentialite': 'RGPD, données personnelles, confidentialité',
      '/versionslegales/cgv': 'CGV, conditions générales de vente, annulation séance',
    };
    return extra[path] ? `${base}, ${extra[path]}` : base;
  }
}