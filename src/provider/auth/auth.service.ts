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

  		this.http.post('https://mydana.herokuapp.com/api/login', JSON.stringify(details), {headers: headers})
  		.subscribe(res => {

  			let data = res.json();
  			this.token = data.token;
        localStorage.setItem('token',data.token);
  			resolve(data);
  		}, (err) => {
  			reject(err);
  		});
  	});
  }

  createAccount(regData){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('https://mydana.herokuapp.com/api/register', JSON.stringify(regData), {headers: headers})
      .subscribe(res => {

        let data = res.json();
        this.token = data.token;
        localStorage.setItem('token',data.token);
        resolve(data);

      }, (err) => {
        reject(err);
      });
    });
  }

  editAccount(upData, id){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('https://mydana.herokuapp.com/api/user/'+ id, JSON.stringify(upData), {headers: headers})
      .subscribe(res => {

        let data = res.json();
        this.token = data.token;
        localStorage.setItem('token', data.token);
        resolve(data);

      }, (err) => {
          reject(err);
      });
    });
  }
}
