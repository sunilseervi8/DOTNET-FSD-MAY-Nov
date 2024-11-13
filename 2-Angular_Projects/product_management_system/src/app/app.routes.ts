import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CategorymensComponent } from './categorymens/categorymens.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"Dashboard",
        component:DashBoardComponent
    },{
        path:"product",
        component:CategorymensComponent
    }
];
