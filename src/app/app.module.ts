import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { HttpService } from '../provider/http/http.service'

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'login', 
      component: LoginComponent 
    }
    ])
  ],

  providers: [
    HttpService
  ],

  bootstrap: [
    HomeComponent
  ]
})
export class AppModule { }
