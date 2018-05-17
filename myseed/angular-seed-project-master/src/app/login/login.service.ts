import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  login(input: any) {
    
    return this.httpClient.post(environment.apiUrl + 'login/login', input);
  }
}
