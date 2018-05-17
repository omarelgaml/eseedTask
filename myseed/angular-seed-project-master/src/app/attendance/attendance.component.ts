import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
days;
  constructor(private attendanceService: AttendanceService) { }


  settings = {  
    edit:{
         confirmSave:true
        },
    
        add:{
         confirmCreate:true
          },
    
        columns: {
          Date:{
           title:'date'
          },
          WorkingHours: {
            title: 'Working hours'
          },
          Employee:{
            title:"Employee",
            valuePrepareFunction: (Employee) => {
                return Employee.EmployeeEmail;
            }
     },
        
     present:{
      title:"present",
      valuePrepareFunction: (Status) => {
          return Status.present;
      }
        },
        absent:{
          title:"absent",
          valuePrepareFunction: (Status) => {
              return Status.Absent;
          }
            },
            sickleave:{
              title:"sick leave",
              valuePrepareFunction: (Status) => {
                  return Status.SickLeave;
              }
                },
                dayoff:{
                  title:"dayoff",
                  valuePrepareFunction: (Status) => {
                      return Status.DayOff;
                  }
                    },
        }
      };








  ngOnInit() {
    


}

}
