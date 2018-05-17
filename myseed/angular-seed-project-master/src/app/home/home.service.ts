import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient,private router: Router) { }
  getEmployees() {
    
    return this.httpClient.get(environment.apiUrl + 'employee/getemployees');
  }
  createEmployee(data:any){
  
    return this.httpClient.post(environment.apiUrl +'employee/createEmployee',data);
  }

  updatemployee(data:any,employeeId){
  
    return this.httpClient.patch(environment.apiUrl + 'employee/updateEmployee/'+employeeId,data);
  }


  deleteProduct(employeeId){
  
  
    return this.httpClient.delete(environment.apiUrl + 'employee/deleteEmployee/'+employeeId);
  }


}
