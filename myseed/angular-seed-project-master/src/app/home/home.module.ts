import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [HomeComponent],
  providers:[
    HomeService
  ]
})
export class HomeModule { }
