import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { DeleteUserComponent } from './admin/users/delete-user/delete-user.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { AddEventComponent } from './admin/calendar/add-event/add-event.component';
import { EditTimeComponent } from './admin/calendar/edit-time/edit-time.component';
import { NewSessionComponent } from './admin/calendar/new-session/new-session.component';
import { DeleteSessionComponent } from './admin/calendar/delete-session/delete-session.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { GardSerService } from './gard-ser.service';
import { SecurityService } from './security.service';
import { TableService } from './table.service';
import { MethodsService } from './methods.service';
import { ProfessorComponent } from './professor/professor.component';
import { EditProfComponent } from './professor/edit-prof/edit-prof.component';
import { CalendarProfComponent } from './professor/calendar-prof/calendar-prof.component';
import { EditDateComponent } from './admin/calendar/edit-date/edit-date.component';
import { jourN } from './jourN';
import { GetSes } from './GetSes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AdminComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    CalendarComponent,
    AddEventComponent,
    EditTimeComponent,
    NewSessionComponent,
    DeleteSessionComponent,
    ProfessorComponent,
    EditProfComponent,
    CalendarProfComponent,
    EditDateComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule, FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'comptes', component: UsersComponent},
      { path: 'calendrier', component: CalendarComponent}
    ]),
    AppRoutingModule
  ],
  providers: [GardSerService,SecurityService,TableService,MethodsService,jourN,GetSes],
  bootstrap: [AppComponent],
  entryComponents: [
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddEventComponent,
    EditTimeComponent,
    NewSessionComponent,
    DeleteSessionComponent,
    EditDateComponent,
    AddEventComponent
  ]
})
export class AppModule { }
