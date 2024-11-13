import { Routes } from '@angular/router';
import { LoginComponent } from './components/Accounts/login/login.component';
import { UserRegistrationComponent } from './components/Accounts/user-registration/user-registration.component';
import { SidenavComponent } from './components/userDashboard/sidenav/sidenav.component';
import { AdminSideNavComponent } from './components/adminDashBoard/admin-side-nav/admin-side-nav.component';
import { Component } from '@angular/core';
import { AddBookComponent } from './components/adminDashBoard/add-book/add-book.component';
import { ViewBookComponent } from './components/adminDashBoard/view-book/view-book.component';
import { EditDeleteBookComponent } from './components/adminDashBoard/edit-delete-book/edit-delete-book.component';
import { AdminLoginComponent } from './components/Accounts/admin-login/admin-login.component';
import { adminGuard } from './authguard/admin.guard';
import { userGuard } from './authguard/user.guard';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'register',
        component:UserRegistrationComponent
    },{
        path:'login',
        component:LoginComponent,
        
    },
    {
        path: 'userDashboard',
        component:SidenavComponent,
        canActivate:[userGuard],
        children:[
            {
                path:"",
                component:ViewBookComponent

            }
        ]
    }
    ,{  
        path:'adminDashboard',
        component:AdminSideNavComponent,
        // canActivate:[adminGuard],
        children:[
            {
                path:'addBook',
                component:AddBookComponent
            },
            {
                path:'view-book',
                component:ViewBookComponent
            },
            {
                path:''
                ,component:ViewBookComponent
            },{
                path:'edit-book',
                component:EditDeleteBookComponent
            }

        ]
    },{
        path:'admin',
        component:AdminLoginComponent

    }

];
