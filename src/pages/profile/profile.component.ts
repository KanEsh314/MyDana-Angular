import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service'; 
import { AuthServiceLogin } from '../../provider/auth/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id : number = 2;
  userInfo : any = {};

  constructor(public authServices: AuthServiceLogin, public httpServices: HttpService,public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.httpServices.getUserById(this.id).subscribe(data => {
      this.userInfo = data.data;
      //console.log(this.userInfo);
    }, (err) => {
      console.log(err);
    });
  }

  getUpdate(){

    let upData = {
      name : this.userInfo.name,
      first_name : this.userInfo.first_name,
      last_name : this.userInfo.last_name,
      gender : this.userInfo.gender,
      birthdate : this.userInfo.birthdate,
      race : this.userInfo.race,
      address : this.userInfo.address,
      locale : this.userInfo.locale,
      phone_number : this.userInfo.phone_number,
      email : this.userInfo.email,
      password : this.userInfo.password
    }

    console.log(upData);

    this.authServices.editAccount(upData).then(result => {
      //this.toastr.success('You are awesome!', 'Success!');
      console.log("Success");
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
