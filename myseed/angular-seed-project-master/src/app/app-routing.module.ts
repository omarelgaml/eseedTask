import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'attendance', component: AttendanceComponent }

];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
