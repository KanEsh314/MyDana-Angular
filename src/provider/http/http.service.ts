import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public http: Http) { 
  	console.log("Http Service Is Working...")
  }

  getBanner(){
  	return this.http.get('https://mydana.herokuapp.com/api/banners')
  	.map((res:Response) => res.json());
  }

  getLatest(){
  	return this.http.get('https://mydana.herokuapp.com/api/latest')
  	.map((res:Response) => res.json());
  }

  getCampaign(){
    return this.http.get('https://mydana.herokuapp.com/api/campaigns')
    .map((res:Response) => res.json());
  }

  getCampaignById(id){
    return this.http.get('https://mydana.herokuapp.com/api/campaign/'+id)
    .map((res:Response) => res.json());
  }

  getUserById(id){
    return this.http.get('https://mydana.herokuapp.com/api/user/'+id)
    .map((res:Response) => res.json());
  }
}
