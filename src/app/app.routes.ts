import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WmainComponent } from './wmain/wmain.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root path to login
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'weather', component:WmainComponent},
    { path: 'about', component:AboutComponent}
];

export default routes;