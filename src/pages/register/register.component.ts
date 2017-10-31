import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceLogin } from '../../provider/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg : any = {};

  constructor(public router: Router, public authServices: AuthServiceLogin) { 

  }

  ngOnInit() {
    
  }

  getRegister(){

  	let regData = {
		name : this.reg.name,
		first_name : this.reg.first_name,
		last_name : this.reg.last_name,
		email : this.reg.email,
		password : this.reg.password
  	}

  	this.authServices.createAccount(regData).then(result => {
  		console.log(result);
  	}, (err) => {
  		console.log(err);
  	});
  }

}
