import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service'

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const loginservice=inject(LoginService)
  if (loginservice.isLogOrNot()) {
    return true
  } else {
    router.navigate(["/login"])
    return false
  }
};
