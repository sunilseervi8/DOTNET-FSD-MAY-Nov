import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const isAuthenticated=inject(AdminService)
  const route1=inject(Router)
  if(isAuthenticated.isAuthenticated()){
    return true;

  }
  else{
    route1.navigate(['/admin'])
    return false;
  }
};


