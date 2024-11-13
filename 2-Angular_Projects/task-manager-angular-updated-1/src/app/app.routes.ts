import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';


export const routes: Routes = [
    {
        path:"register",
        component:RegisterComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent,
        children:[
            {
                path:"addtask",
               component: AddtaskComponent
            },
            {
                path:"viewtask",
                component: ViewtaskComponent
            }
        ]
    }
    
];
