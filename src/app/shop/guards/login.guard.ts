import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token  = localStorage.getItem('token')
 return token ? router.navigateByUrl('user') : router.navigate(['login'])
};
