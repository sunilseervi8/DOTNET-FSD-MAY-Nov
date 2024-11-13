import { Routes } from '@angular/router';
import { RegisterComponent } from './MyComponents/register/register.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    }
];
