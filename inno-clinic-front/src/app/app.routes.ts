import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OfficePageComponent } from './pages/office-page/office-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddAppointmentPageComponent } from './pages/add-appointment-page/add-appointment-page.component';
import { AppointmentsPageComponent } from './pages/appointments-page/appointments-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { OfficesPageComponent } from './pages/offices-page/offices-page.component';
import { authGuard } from './guards/auth.guard';
import { Role } from './services/role-service/role.enum';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'offices/:id', component: OfficePageComponent, canActivate: [authGuard]},
    { path: 'offices', component: OfficesPageComponent, canActivate: [authGuard]},
    { path: 'register', component: RegisterPageComponent},
    { path: 'offices/:id/appointment', component: AddAppointmentPageComponent, canActivate: [authGuard]},
    { path: 'appointments', component: AppointmentsPageComponent, canActivate: [authGuard], data: { Roles: [Role.doctor] }},
    { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard]},
    { path: '**', component: LoginComponent}
];
