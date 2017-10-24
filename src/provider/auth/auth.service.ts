import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  public token : any;
  
  constructor(public http: Http){

  }

  loginAccount(details){

  	return new Promise((resolve, reject) => {

  		let headers = new Headers();
  		headers.append('Content-Type','application/json');

  		this.http.post('https://mydana.herokuapp.com/api/login', {headers: headers})
  		.subscribe(res => {

  			let data = res.json();
  			this.token = data.token;

  			resolve(res.json());
  		}, (err) => {
  			reject(err);
  		});
  	});
  }
}
