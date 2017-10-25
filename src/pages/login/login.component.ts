import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../provider/auth/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(public authServices: AuthService, public router: Router){

  }

  ngOnInit() {
    
    let details = {
    name : this.model.name,
    password: this.model.password
  };

    this.authServices.loginAccount(details).then(result => {
      console.log(result);
      console.log("Success");
    },(err) => {
      console.log(err);
      console.log("Fail");
    });
  }

  getLogged(){
    this.ngOnInit();
  }

}
