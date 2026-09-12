import { HttpInterceptorFn } from '@angular/common/http';

declare const proxy:string

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')) {
    const newUrl = `${proxy}${req.url}`;
    const newReq = req.clone({ url: newUrl });
    return next(newReq);
  }
  return next(req);
};
