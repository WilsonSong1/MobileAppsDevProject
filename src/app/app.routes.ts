import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in.page').then( m => m.SignInPage)
  },
  {
    path: 'sports-page',
    loadComponent: () => import('./sports-page/sports-page.page').then( m => m.SportsPagePage)
  },
  {
    path: 'science-page',
    loadComponent: () => import('./science-page/science-page.page').then( m => m.SciencePagePage)
  },

];
