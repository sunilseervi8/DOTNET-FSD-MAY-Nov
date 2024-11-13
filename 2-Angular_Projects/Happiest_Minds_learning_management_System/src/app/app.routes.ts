import { Routes } from '@angular/router';
import { RegisterComponent } from './mycomponent/register/register.component';
import { LoginComponent } from './mycomponent/login/login.component';
import { CandiadateprofileComponent } from './mycomponent/candiadateprofile/candiadateprofile.component';
import { HeroComponent } from './mycomponent/hero/hero.component';
import { SignupComponent } from './mycomponent/signup/signup.component';
import { ModalForUpdateComponent } from '../../src/app/mycomponent/sidenavbar/modal-for-update/modal-for-update.component';
import { DashboardComponent } from './mycomponent/sidenavbar/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'candidate',
        component: CandiadateprofileComponent,

        children: [
            {
                path: 'register1/:id',
                component: RegisterComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                
            },
            {
                path: '',
                component: DashboardComponent,
                
            },{ 
                path: 'register1',
                component: RegisterComponent
            }
            
           

        ]
    },
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'hero',
        component: HeroComponent
    },
    {
        path: 'Signup',
        component: SignupComponent
    }
];
