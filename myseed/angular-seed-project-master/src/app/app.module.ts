import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { HomeService } from './home/home.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceService } from './attendance/attendance.service';
import { AttendanceModule } from './attendance/attendance.module';

@NgModule({
  declarations: [AppComponent,LoginComponent,HomeComponent,AttendanceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },LoginComponent,HomeComponent,HomeService
  ,HomeModule,AttendanceService,AttendanceModule,AttendanceComponent]
})
export class AppModule {}
