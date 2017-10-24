import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD
import { HttpService } from '../provider/http/http.service';
import { AuthService } from '../provider/auth/auth.service';
=======
>>>>>>> f52384c918b067a3de7b1d4a7b546a32009025d6

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
    AppRoutingModule
  ],

  providers: [
    HttpService,
    AuthService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
