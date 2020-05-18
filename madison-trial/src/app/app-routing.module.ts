import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { NewUserComponent } from './new-user/new-user.component'; 

import { RegisterComponent } from './register/register.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolLoginComponent } from './school-login/school-login.component';
import { SchoolCreateNewListingComponent } from './school-create-new-listing/school-create-new-listing.component';
import { SchoolViewOpenListingsComponent } from './school-view-open-listings/school-view-open-listings.component';
import { SchoolViewConfirmedListingsComponent } from './school-view-confirmed-listings/school-view-confirmed-listings.component';
import { SchoolViewProfileComponent } from './school-view-profile/school-view-profile.component';

import { SubHomeComponent } from './sub-home/sub-home.component';
import { SubViewOpenListingsComponent } from './sub-view-open-listings/sub-view-open-listings.component';
import { SubViewConfirmedMatchesComponent } from './sub-view-confirmed-matches/sub-view-confirmed-matches.component';
import { SubViewProfileComponent } from './sub-view-profile/sub-view-profile.component';
import { SubViewMatchesComponent } from './sub-view-matches/sub-view-matches.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'new-user', component: NewUserComponent }, // log in page
	{ path: 'register', component: RegisterComponent },
	{ path: 'school-home', component: SchoolHomeComponent},
	{ path: 'school-login', component: SchoolLoginComponent},
	{ path: 'school-create-new-listing', component: SchoolCreateNewListingComponent},
	{ path: 'school-view-open-listings', component: SchoolViewOpenListingsComponent},
	{ path: 'school-view-confirmed-listings', component: SchoolViewConfirmedListingsComponent},
	{ path: 'school-view-profile', component: SchoolViewProfileComponent},
	{ path: 'sub-home', component: SubHomeComponent},
	{ path: 'sub-view-open-listings', component: SubViewOpenListingsComponent},
	{ path: 'sub-view-confirmed-matches', component: SubViewConfirmedMatchesComponent},
	{ path: 'sub-view-profile', component: SubViewProfileComponent},
	{ path: 'sub-view-matches', component: SubViewMatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
