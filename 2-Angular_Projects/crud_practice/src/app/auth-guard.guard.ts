import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './Services/user.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const isAuthenticated=inject(UserService)
  const route1=inject(Router)

  if(isAuthenticated.isAuthenticated()){
    return true;

  }
  else{
    route1.navigate(['/login'])
    return false;
  }

};
