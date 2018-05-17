import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
employees;
  constructor(private homeService: HomeService) { }
  settings = {
    delete :{
       confirmDelete: true
     } , 
     
    
    edit:{
         confirmSave:true
        },
    
        add:{
         confirmCreate:true
          },
    
        columns: {
          EmployeeEmail:{
           title:'EmployeeEmail'
          },
          Name: {
            title: 'Name'
          },
          Mobile: {
            title: 'Mobile'
          },
        
          HireDate: {
            title: 'HireDate'
          },
        }
      };
  ngOnInit() {
    this.homeService.getEmployees().subscribe(
      (res: any) => {
        this.employees=res.data;
      }
  )

  }




  createEmployee(event) {
    var data = {"EmployeeEmail" : event.newData.EmployeeEmail,
                "Name" : event.newData.Name,
                "Mobile" : event.newData.Mobile,
                "HireDate" : event.newData.HireDate
                };
 this.homeService.createEmployee(data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);

  })
}





deleteEmployee(event) {
  
  var id = event.data._id;
          
            
                        
this.homeService.deleteProduct(id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);

})
}



updateEmployee(event) {
  var data = {"Email" : event.newData.Email,
  "Name" : event.newData.Name,
  "Mobile" : event.newData.Mobile,
  "HireDate" : event.newData.HireDate
  };
              
this.homeService.updatemployee(data,event.data._id).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);

})
}



}
