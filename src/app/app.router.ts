import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegisterComponent } from '../pages/register/register.component';
import { PaymentComponent } from '../pages/payment/payment.component';
import { CampaignComponent } from '../pages/campaign/campaign.component';

export const router: Routes = [

	//{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'campaign', component: CampaignComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);