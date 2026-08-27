import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
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
  private readonly defaultImage = `${this.siteUrl}/og-image.jpg`;

  private currentCanonical?: HTMLLinkElement;

  /** Mapping des chemins Angular -> métadonnées SEO spécifiques */
  private readonly routeMeta: Record<string, { title: string; description: string }> = {
    '/': {
      title:
        'Emilie Pommier - Thérapeute en Intelligence Relationnelle, EMDR, approche sensori-motrice et TCC | Paris 10e et 11e, mais aussi en visio | Prise de RDV en ligne',
      description:
        "Emilie Pommier, thérapeute à Paris 10e et 11e, mais aussi en visio. Guérison des blessures psychiques par l'engagement thérapeutique conscient, selon les approches thérapeutiques de l'Intelligence Relationnelle (modélisée par le Dr F. Le Doze), de l'EMDR, de la thérapie sensori-motrice et des TCC (thérapies cognitivo-comportementales). Prise de RDV en ligne.",
    },
    '/parcours': {
      title: 'Mon parcours de thérapeute | Emilie Pommier - Paris 10e et 11e',
      description:
        "Le parcours d'Emilie Pommier : expérience professionnelle ; formation et spécialisation aux approches sensori-motrice, de l'Intelligence Relationnelle (Dr François Le Doze), de l'EMDR et des TCC ; inter-/supervision et cadre déontologique de l'accompagnement thérapeutique | Paris 10e et 11e.",
    },
    '/tarifs': {
      title: 'Tarifs et modalités | Emilie Pommier - Thérapeute Paris 10e et 11e',
      description:
        "Tarifs des séances de thérapie en cabinet (Paris 10e et 11e) ou en visio : durées, fréquence recommandée, moyens de paiement et conditions d'annulation.",
    },
    '/via-carte': {
      title: 'Réservez votre 1er échange offert 30 min | Emilie Pommier - Paris 10e et 11e',
      description:
        'Page dédiée aux scans QR depuis les cartes de visite : choisissez un créneau en cabinet (Paris 10e ou 11e) ou en visio pour votre premier échange, offert, de 30 minutes.',
    },
    '/mentionslegales': {
      title: 'Mentions légales | Emilie Pommier - Thérapeute Paris',
      description:
        "Mentions légales du site emiliepommier.fr : éditeur, hébergeur, propriété intellectuelle et responsabilité professionnelle d'Emilie Pommier, psychopraticienne.",
    },
    '/politiquedeconfidentialite': {
      title: 'Politique de confidentialité | Emilie Pommier - Thérapeute Paris',
      description:
        'Politique de confidentialité de emiliepommier.fr : données collectées, durée de conservation, règlementation RGPD et données personnelles, contact DPO.',
    },
    '/versionslegales/cgv': {
      title: 'Conditions générales de vente | Emilie Pommier - Thérapeute Paris',
      description:
        'Conditions générales de vente des séances de thérapie proposées par Emilie Pommier : tarif, règlement, annulation, rétractation.',
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
    const base =
      'thérapeute Paris, thérapie Paris 10e et 11e, approche trauma-informée, psychotraumatisme, Intelligence Relationnelle, François Le Doze, engagement thérapeutique conscient, guérison des trauma, guérison des blessures, blessure psychique, dissociation, dissociation structurelle, traumatisme développemental, trauma de négligence';
    const extra: Record<string, string> = {
      '/parcours': 'parcours thérapeute, formation, supervision, déontologie',
      '/tarifs': 'tarifs thérapie, prix séance en présentiel, visio-consultation, séance au cabinet',
      '/via-carte':
        'QR code, carte de visite, réservation, premier échange offert, prise de rendez-vous',
      '/mentionslegales': 'mentions légales',
      '/politiquedeconfidentialite': 'RGPD, données personnelles, confidentialité',
      '/versionslegales/cgv': 'CGV, conditions générales de vente, annulation séance',
    };
    return extra[path] ? `${base}, ${extra[path]}` : base;
  }
}
