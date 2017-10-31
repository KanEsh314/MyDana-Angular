import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { ArticlesComponent } from '../pages/articles/articles.component';
import { ArticleDetailsComponent } from '../pages/article-details/article-details.component';

import { HttpService } from '../provider/http/http.service';
import { AuthServiceLogin } from '../provider/auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

 let config = new AuthServiceConfig([
   {
     id : GoogleLoginProvider.PROVIDER_ID,
     provider : new GoogleLoginProvider("330722866785-ar9ncfsm9htv6m899del7vvj7a74ae30.apps.googleusercontent.com") 
   },
   {
     id : FacebookLoginProvider.PROVIDER_ID,
     provider : new FacebookLoginProvider("674345882769046")
   }
   ]);

 export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PaymentComponent,
    CampaignComponent,
    AboutComponent,
    ProfileComponent,
    ArticlesComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    HttpService,
    AuthServiceLogin,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
