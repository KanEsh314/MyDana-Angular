import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public http: Http) { 
  	//console.log("Http Service Is Working...")
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

  getArticle(){
    return this.http.get('https://mydana.herokuapp.com/api/articles')
    .map((res:Response) => res.json());
  }

  postComment(comm, id){
   
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post('https://mydana.herokuapp.com/api/campaign/'+id+'/campaigncomment', JSON.stringify(comm), {headers:headers})
      .subscribe(res => {
       
        let data = res.json();
        console.log(data);
        resolve(data);
      
      }, (err) => {
        reject(err);
      });
    });
  }

  getNews(id){
    return this.http.get('https://mydana.herokuapp.com/api/campaign/'+id+'/campaignnew')
    .map((res:Response) => res.json());
  }

  getComment(id){
    return this.http.get('https://mydana.herokuapp.com/api/campaign/'+id+'/campaigncomment')
    .map((res:Response) => res.json());
  }

}
