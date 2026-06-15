import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then(m => m.App)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then(m => m.Admin)
  },
];
