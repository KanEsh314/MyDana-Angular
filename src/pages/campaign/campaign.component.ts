import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaign : any;

  constructor(public httpServices: HttpService, public route: ActivatedRoute) {

  }

  ngOnInit() {

  	this.route.params.subscribe(params => {
  		this.campaign = params;
  		//console.log(this.campaign);
  	}, (err) => {
  		console.log(err);
  	});
  }

}
