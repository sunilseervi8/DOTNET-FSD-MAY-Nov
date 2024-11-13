import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const userGuard: CanActivateFn = (route, state) => {
  const isAuthenticated=inject(UserService)
  const route1=inject(Router)
  if(isAuthenticated.isAuthenticated()){
    return true;

  }
  else{
    route1.navigate(['/user'])
    return false;
  }
}
