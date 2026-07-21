import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then((m) => m.App),
  },

  {
    path: 'parcours',
    loadComponent: () => import('./parcours/parcours').then((m) => m.Parcours),
  },

  {
    path: 'tarifs',
    loadComponent: () => import('./tarifs/tarifs').then((m) => m.Tarifs),
  },

  {
    path: 'mentionslegales',
    loadComponent: () => import('./mentionslegales/mentionslegales').then((m) => m.Mentionslegales),
  },

  {
    path: 'politiquedeconfidentialite',
    loadComponent: () =>
      import('./politiqueconfidentialite/politiqueconfidentialite').then(
        (m) => m.Politiqueconfidentialite,
      ),
  },

  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then((m) => m.Admin),
  },

  {
    path: 'tests',
    loadComponent: () => import('./tests/tests').then((m) => m.Tests),
  },

  {
    path: 'versionslegales/:page',
    loadComponent: () => import('./versionslegales/versionslegales').then((m) => m.Versionslegales),
  },

  {
    path: 'versionslegales',
    redirectTo: 'versionslegales/cgv',
    pathMatch: 'full',
  },
];
