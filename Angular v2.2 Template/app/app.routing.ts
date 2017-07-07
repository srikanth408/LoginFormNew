import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/app.login.component';
import { LeaveComponent } from './Home/app.leave.component';
import { SignupComponent } from './Admin/app.signup.component';
import { EdituserComponent } from './Admin/app.edituser.component';
import { AdminComponent } from './Admin/app.admin.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'leave', component: LeaveComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'edit', component: EdituserComponent },
    

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingComponent { }
export const routingModuleComponent = [LoginComponent, LeaveComponent,AdminComponent,EdituserComponent,SignupComponent]

