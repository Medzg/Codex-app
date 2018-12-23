import { NgModule, Component } from '@angular/core';
import {RouterModule , Routes} from "@angular/router";
import {provideForRootGuard} from "@angular/router/src/router_module";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {CalendarComponent} from "./admin/calendar/calendar.component";
import { UsersComponent } from './admin/users/users.component';
import { SecurityService } from './security.service';
import { ProfessorComponent } from './professor/professor.component';
import { CalendarProfComponent } from './professor/calendar-prof/calendar-prof.component';
import { EditProfComponent } from './professor/edit-prof/edit-prof.component';

const appRoutes: Routes = [
    {
      path: '',
        component: LoginComponent,
       

    },
    {
        path: 'login',
          component: LoginComponent,
         
  
      },
    {
        path: 'admin',
        children: [
            {
              path : '',
                component : AdminComponent,
                canActivate : [SecurityService]
            },
            {
              path : 'calendrier',
                component:  CalendarComponent,
                canActivate : [SecurityService]

            },
            {
                path : 'comptes',
                component : UsersComponent,
                canActivate : [SecurityService]
            }
        
        ]

    },
    {
        path : 'prof',
        children :[
            {
                path : '',
                component : ProfessorComponent,
                canActivate : [SecurityService]
                
            },
            {
                path : 'calendar',
                component : CalendarProfComponent,
                canActivate : [SecurityService]
                

            },
            {
                path : 'modifier',
                component : EditProfComponent,
                canActivate : [SecurityService]
               
            }



        ]

    },
    ];

@NgModule({
  imports: [

      RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
