import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OfficePageComponent } from './pages/office-page/office-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddAppointmentPageComponent } from './pages/add-appointment-page/add-appointment-page.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { OfficesPageComponent } from './pages/offices-page/offices-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'offices/:id', component: OfficePageComponent},
    { path: 'offices', component: OfficesPageComponent},
    { path: 'register', component: RegisterPageComponent},
    { path: 'offices/:id/appointment', component: AddAppointmentPageComponent},
    { path: 'appointments', component: AppointmentsPageComponent},
    { path: 'profile', component: ProfilePageComponent},
    { path: '**', component: LoginComponent}
];
