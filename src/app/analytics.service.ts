import { Injectable, inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * AnalyticsService
 * ----------------
 * - Capture les paramètres UTM (utm_source / utm_medium / utm_campaign) à
 *   l'arrivée sur le site et les stocke en sessionStorage (valables pour la
 *   session) + lastTouch (lastTouch_*) qui suivent le dernier UTM vu.
 * - Émet des événements à la fois vers :
 *     • Google Analytics 4 (gtag / dataLayer) — déjà chargé via GTM-MRP2LS7P
 *     • Plausible (window.plausible) — chargé conditionnellement si tu mets
 *       le script Plausible dans index.html (cf. commentaires en bas).
 *
 * Événements exposés :
 *   • page_view              — auto à chaque NavigationEnd
 *   • view_rdv_section       — quand on scrolle sur #rdv (à brancher sur scrollTo)
 *   • click_rdv              — clic sur un bouton "Prendre rendez-vous"
 *   • view_calendar          — quand selectedDate() change
 *   • lead_captured          — quand le formulaire RDV est soumis avec succès
 *
 * Conformité RGPD : Plausible est cookieless (pas de bandeau requis).
 * GA4 via GTM nécessite un bandeau cookies — déjà géré par ton site.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService implements OnDestroy {
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  private utmCache: Record<string, string> = {};
  private subs = new Subscription();

  constructor() {
    this.captureUtmFromUrl();

    // page_view à chaque navigation
    this.subs.add(
      this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((e) => this.onRouteChange(e.urlAfterRedirects)),
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  // =================== UTM ===================

  /** Lit les UTM depuis l'URL courante (1ère visite) ou depuis sessionStorage */
  public getUtm(): Record<string, string> {
    if (Object.keys(this.utmCache).length > 0) return { ...this.utmCache };
    try {
      const stored = sessionStorage.getItem('utm_cache');
      if (stored) this.utmCache = JSON.parse(stored);
    } catch {
      /* ignore */
    }
    return { ...this.utmCache };
  }

  private captureUtmFromUrl(): void {
    try {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      const next: Record<string, string> = {};
      const keys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
      ];
      for (const k of keys) {
        const v = params.get(k);
        if (v) next[k] = v;
      }
      if (Object.keys(next).length > 0) {
        this.utmCache = next;
        sessionStorage.setItem('utm_cache', JSON.stringify(next));
        // lastTouch : garde la trace du dernier clic (utile si le visiteur
        // arrive via carte, navigue, et finit sur /via-carte)
        sessionStorage.setItem('utm_last_touch', JSON.stringify(next));
      }
    } catch {
      /* URL parsing peut échouer dans certains contextes (file://) */
    }
  }

  // =================== Events ===================

  public track(eventName: string, params: Record<string, unknown> = {}): void {
    const enriched = { ...this.getUtm(), ...params };
    // GA4 (via GTM dataLayer)
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: eventName,
        ...enriched,
      });
    } catch {
      /* dataLayer indisponible (SSR, prerender, etc.) */
    }
    // Plausible (custom event goal)
    try {
      const plausible = (window as any).plausible;
      if (typeof plausible === 'function') {
        plausible(eventName, { props: enriched });
      }
    } catch {
      /* pas chargé */
    }
    // Debug en console
    if ((window as any).HERMES_DEBUG_ANALYTICS) {
      // eslint-disable-next-line no-console
      console.log('[analytics]', eventName, enriched);
    }
  }

  public pageView(path: string): void {
    this.track('page_view', {
      page_path: path,
      page_title: this.title.getTitle(),
      page_location: window.location.href,
    });
  }

  public clickRdv(location: string): void {
    this.track('click_rdv', { location });
  }

  public viewRdvSection(): void {
    this.track('view_rdv_section');
  }

  public viewCalendar(): void {
    this.track('view_calendar');
  }

  public leadCaptured(method: 'card_visit' | 'direct' | 'social' = 'direct'): void {
    this.track('lead_captured', { method });
  }

  // =================== Router hook ===================

  private onRouteChange(url: string): void {
    const [pathOnly] = url.split('?');
    const normalized = pathOnly.replace(/\/+$/, '') || '/';
    this.pageView(normalized);
  }
}

/**
 * ----------------------------------------------------------------------
 * Pour ACTIVER Plausible (optionnel mais recommandé, RGPD-friendly) :
 *
 * 1. Crée un compte sur https://plausible.io (9 $/mois ou self-hosted).
 * 2. Ajoute ce script dans src/index.html, juste avant </head> :
 *
 *    <script defer data-domain="emiliepommier.fr"
 *            src="https://plausible.io/js/script.js"></script>
 *
 * 3. Le service AnalyticsService appellera automatiquement
 *    window.plausible(eventName, { props }) pour chaque event.
 *
 * 4. Côté dashboard Plausible, active ces "Custom event goals" :
 *    - view_rdv_section
 *    - click_rdv
 *    - view_calendar
 *    - lead_captured
 *
 * Pour les Funnels (ex: visit → view_rdv → click_rdv → lead_captured),
 * va dans Plausible > Funnels > New funnel, et empile ces 4 events.
 * ----------------------------------------------------------------------
 */