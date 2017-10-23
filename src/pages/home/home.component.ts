import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	banner : any;
  latest : any;

  constructor(public httpServices: HttpService){

  }

  ngOnInit() {

    //Banner
  	this.httpServices.getBanner()
    .subscribe(data => {
      this.banner = data.data;
      console.log(this.banner[0].banner_image);
    }, (err) => {
      console.log(err);
    });

    //Latest
    this.httpServices.getLatest()
    .subscribe(data => {
      this.latest = data.data;
      console.log(this.latest);
    }, (err) => {
      console.log(err);
    });

    //
  }
}
