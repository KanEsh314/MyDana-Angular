import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';
import { AboutComponent } from '../pages/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpService } from '../provider/http/http.service';
import { AuthService } from '../provider/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PaymentComponent,
    CampaignComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    HttpService,
    AuthService
  ],

  bootstrap: [
    HomeComponent
  ]
})
export class AppModule {

}
