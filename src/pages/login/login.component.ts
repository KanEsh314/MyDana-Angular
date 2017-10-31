import { Component, OnInit } from '@angular/core';
import { AuthServiceLogin } from '../../provider/auth/auth.service';
import { Router } from '@angular/router'; 

import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(public authServices: AuthServiceLogin, public router: Router, public authServicesSocial: AuthService){

  }

  ngOnInit() {
    
  }

  getLogged(){
    let details = {
    name : this.model.name,
    password: this.model.password
  };

    this.authServices.loginAccount(details).then(result => {
      console.log(result);
    },(err) => {
      console.log(err);
    });
  }

  getFBLogged(){
    this.authServicesSocial.signIn(FacebookLoginProvider.PROVIDER_ID);

    //Subscribe
    this.authServicesSocial.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    },(err)=> {
      console.log(err);
    });
  }

  getGLogged(){
    this.authServicesSocial.signIn(GoogleLoginProvider.PROVIDER_ID);
  
    //Subscribe
    this.authServicesSocial.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    },(err)=> {
      console.log(err);
    });
  }

  logOut(){
    this.authServicesSocial.signOut();
  }

}
