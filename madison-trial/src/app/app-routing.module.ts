import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { NewUserComponent } from './new-user/new-user.component'; 
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolCreateNewListingComponent } from './school-create-new-listing/school-create-new-listing.component';
import { SchoolViewOpenListingsComponent } from './school-view-open-listings/school-view-open-listings.component';
import { SchoolViewConfirmedListingsComponent } from './school-view-confirmed-listings/school-view-confirmed-listings.component';
import { SchoolViewProfileComponent } from './school-view-profile/school-view-profile.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'new-user', component: NewUserComponent },
	{ path: 'school-home', component: SchoolHomeComponent},
	{ path: 'school-create-new-listing', component: SchoolCreateNewListingComponent},
	{ path: 'school-view-open-listings', component: SchoolViewOpenListingsComponent},
	{ path: 'school-view-confirmed-listings', component: SchoolViewConfirmedListingsComponent},
	{ path: 'school-view-profile', component: SchoolViewProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
