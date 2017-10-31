import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  private campaign;
  popular : any;
  comment : any;
  
  camp: any = {};

  news : any;

  constructor(public httpServices: HttpService, public route: ActivatedRoute) {

  }

  ngOnInit() {

  	  this.route.params.subscribe(params => {
  	 	this.campaign =+params['id'];
       //console.log(this.campaign);
  	 }, (err) => {
  	 	console.log(err);
  	 });

    //Popular
    this.httpServices.getCampaignById(this.campaign).subscribe(data => {
      this.popular = data.data;
      //console.log(this.popular);
    }, (err) => {
      console.log(err);
    });

    //News
    this.httpServices.getNews(this.campaign).subscribe(data => {
      this.news = data.data;
      //console.log(this.news);
    }, (err) => {
      console.log(err);
    })

    //Comment
    this.httpServices.getComment(this.campaign).subscribe(data => {
      this.comment = data.data;
    }, (err) => {
      console.log(err);
    });

  }

  postComment(){

    let comm = {
      desc : this.camp.textMsg,
      user_id : 2,
      campaign_id : this.campaign
    }

    console.log(comm);

    this.httpServices.postComment(comm, this.campaign).then(data => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
