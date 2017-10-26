import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';
import { AboutComponent } from '../pages/about/about.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes : Routes = [
	{ path : '', redirectTo: 'home', pathMatch: 'full' },
	{ path : 'home', component: HomeComponent },
	{ path : 'login', component: LoginComponent },
	{ path : 'campaign/:id', component: CampaignComponent },
	{ path : 'register', component: RegisterComponent },
	{ path : 'payment', component: PaymentComponent },
	{ path : 'about', component: AboutComponent },
	{ path : 'profile', component: ProfileComponent }
	];

	@NgModule({
		imports : [ RouterModule.forRoot(routes)],
		exports: [ RouterModule ]
	})

	export class AppRoutingModule {

	}