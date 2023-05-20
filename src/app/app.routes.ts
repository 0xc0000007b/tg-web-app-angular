import {Routes} from '@angular/router';




export const routes: Routes = [
  {path: '', loadComponent: () => import('./shop/components/welcome/welcome/welcome.component').then((c) => c.WelcomeComponent)},
  {path: 'user', loadComponent: () => import('./shop/components/user/user/user.component').then((c) => c.UserComponent)},
  {path: 'form', loadComponent: () => import('./shop/components/feedback/feedback.component').then(c => c.FeedbackComponent)}
];
