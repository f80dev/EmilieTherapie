import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

const API_BASE = 'https://api.emiliepommier.fr';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api') && !isDevMode()) {
    const newUrl = `${API_BASE}${req.url}`;
    const newReq = req.clone({ url: newUrl });
    return next(newReq);
  }
  return next(req);
};
