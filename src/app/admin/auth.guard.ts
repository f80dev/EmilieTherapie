import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  const password = route.queryParamMap.get('pwd');
  if (password && authService.login(password)) {
    return true;
  }

  const urlTree = router.createUrlTree(['/admin/login']);
  return urlTree;
};
