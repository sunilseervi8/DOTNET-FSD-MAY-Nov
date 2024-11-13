import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {
        path:"card/:id",
        component:CardComponent
    },
    {
        path:"",
        component:CardComponent
    },
    
];
