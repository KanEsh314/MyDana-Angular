import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../provider/http/http.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : any;

  constructor(public httpServices: HttpService) {

  }

  ngOnInit() {
  
  	this.httpServices.getArticle().subscribe(data => {
  		this.articles = data.data;
  		console.log(this.articles);
  	}, (err) => {
  		console.log(err);
  	});

  }

}
