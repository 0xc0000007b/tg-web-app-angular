import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const authGuard = () => {
  const router = inject(Router)
  const token = localStorage.getItem('token')
  if (!token) {
    router.navigateByUrl('login')
    return false
  }
  return router.navigateByUrl('user')

}
