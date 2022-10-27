
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const desktopRoutes: Routes = [
    {
        path : '',
        component: MasterPageComponent,
        children:[
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'about',
                component: AboutPageComponent
            },
            {
                path: 'contact',
                component: ContactPageComponent
            }
        ]
    },
   
]; // sets up routes constant where you define your routes

const defaultRoutes: Routes = [
    {
        path: '404',
        component: NotFoundPageComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule { }