import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service'; 
import { AuthService } from '../../provider/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id : number = 2;
  userInfo : any;

  constructor(public authServices: AuthService, public httpServices: HttpService) {

  }

  ngOnInit() {

  	let upData = {

  	}

  	this.authServices.editAccount(upData, this.id).then(result => {
  		console.log(result);
  	}, (err) => {
  		console.log(err);
  	});

  	this.httpServices.getUserById(this.id).subscribe(data => {
  		this.userInfo = data.data;
  		console.log(this.userInfo);
  	}, (err) => {
  		console.log(err);
  	});

  }

}
