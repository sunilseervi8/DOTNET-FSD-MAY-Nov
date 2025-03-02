import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpmeComponent } from './helpme/helpme.component';
import { AnimalComponent } from './animal/animal.component';

export const routes: Routes = [
    {
        path: "home",
        component:HomeComponent
    },

    {
        path: "about",
        component:AboutComponent
    },
    {
        path: "contact",
        component:ContactComponent
    },
    {
        path: "helpme",
        component:HelpmeComponent
    },
    {
        path: "animal",
        component:AnimalComponent
    },
];
