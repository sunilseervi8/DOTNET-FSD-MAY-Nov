import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Accounts/login/login.component';
import { RegisterComponent } from './Components/Accounts/register/register.component';
import { SidenavComponent } from './Components/navigations/sidenav/sidenav.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sideNav',
    component: SidenavComponent,
    canActivate:[authGuardGuard],
    children: [
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'view-user',
        component: ViewUserComponent,
      },
      {
        path:'view-user/edit/:id',
        component:EditUserComponent
      }
    ],
  },
];
