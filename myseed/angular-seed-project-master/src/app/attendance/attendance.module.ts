import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
