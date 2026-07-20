import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Lightweight screen-size service.
 * Exposes isSmallScreen() (true when viewport width <= 768px)
 * using a signal so templates stay reactive.
 */
@Injectable({ providedIn: 'root' })
export class ScreenService {
  private platformId = inject(PLATFORM_ID);

  private readonly _isSmall = signal(this.detect());

  isSmallScreen(): boolean {
    return this._isSmall();
  }

  private detect(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return window.matchMedia('(max-width: 768px)').matches;
  }
}
