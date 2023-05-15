import {Routes} from '@angular/router';
import {authGuard} from "./shop/guards/auth.guard";



export const routes: Routes = [
  {path: '', pathMatch: 'full', loadComponent: () => import('./shop/components/welcome/welcome/welcome.component').then((c) => c.WelcomeComponent)},
  {path: 'login', loadComponent: () => import('./shop/components/login/login-page/login-page.component').then((c) => c.LoginPageComponent),  canActivate: [authGuard]},
  {path: 'user', loadComponent: () => import('./shop/components/user/user/user.component').then((c) => c.UserComponent),  canActivate: [authGuard]}
];
