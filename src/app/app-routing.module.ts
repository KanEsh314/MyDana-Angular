import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';

const routes : Routes = [
	{ path : '', redirectTo: '/home', pathMatch: 'full' },
	{ path : 'login', component: LoginComponent }
	];

	@NgModule({
		imports : [ RouterModule.forRoot(routes)],
		exports: [ RouterModule ]
	})

	export class AppRoutingModule {

	}