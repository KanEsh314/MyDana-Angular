import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../provider/auth/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	name = '';
	password = '';


  
  constructor(public authServices: AuthService){

  }

  ngOnInit() {
		
	let details = {
		name : this.name,
		password: this.password
	};

  	this.authServices.loginAccount(details).then((result) => {
  		console.log(result);
  	},(err) => {
  		console.log(err);
  	});
  }

}
