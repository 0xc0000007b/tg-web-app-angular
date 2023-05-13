import { Routes } from '@angular/router';


export const routes: Routes = [
  {path: '', loadComponent: () => import('./shop/components/welcome/welcome/welcome.component').then((c) => c.WelcomeComponent)}
];
