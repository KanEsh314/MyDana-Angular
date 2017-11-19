import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	banners : any;
  latests : any;

  constructor(public httpServices: HttpService, public router: Router){

  }

  ngOnInit() {

    //Banner
  	this.httpServices.getBanner()
    .subscribe(data => {
      this.banners = data.data;
      console.log(this.banners);
    }, (err) => {
      console.log(err);
    });

    //Latest
    this.httpServices.getLatest()
    .subscribe(data => {
      this.latests = data.data;
      console.log(this.latests);
    }, (err) => {
      console.log(err);
    });

    //
  }

  getCampaign(id){
    this.router.navigate(['/campaign',id]);
  }
}