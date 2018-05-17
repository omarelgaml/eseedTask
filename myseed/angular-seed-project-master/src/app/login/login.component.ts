import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  emailadd = "";
  pass = "";
  public input = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  onUpdateEmail(event: any) {
    this.emailadd = (<HTMLInputElement>event.target).value;
  }

  onUpdatePass(event: any) {
    this.pass = (<HTMLInputElement>event.target).value;
  }
  onLogin() {
    this.input.email = this.emailadd;
    this.input.password = this.pass;
    this.loginService.login(this.input).subscribe((res: any) => {
    }, error => {
      alert(error);
      window.location.href = "#/home";
    }
    );
  }







  

}











