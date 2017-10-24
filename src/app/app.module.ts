import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';
import { routes } from './app.router';

import { HttpService } from '../provider/http/http.service'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PaymentComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],

  providers: [
    HttpService
  ],

  bootstrap: [
    HomeComponent
  ]
})
export class AppModule {

}
