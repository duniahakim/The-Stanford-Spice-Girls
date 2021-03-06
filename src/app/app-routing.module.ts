import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MessagingComponent } from './messaging/messaging.component';
import { SchoolChatComponent } from './schoolchat/schoolchat.component';

import { RegisterComponent } from './register/register.component';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolCreateNewListingComponent } from './school-create-new-listing/school-create-new-listing.component';
import { SchoolViewOpenListingsComponent } from './school-view-open-listings/school-view-open-listings.component';
import { SchoolViewConfirmedListingsComponent } from './school-view-confirmed-listings/school-view-confirmed-listings.component';
import { SchoolViewProfileComponent } from './school-view-profile/school-view-profile.component';

import { SubHomeComponent } from './sub-home/sub-home.component';
import { SubViewOpenListingsComponent } from './sub-view-open-listings/sub-view-open-listings.component';
import { SubViewConfirmedMatchesComponent } from './sub-view-confirmed-matches/sub-view-confirmed-matches.component';
import { SubViewProfileComponent } from './sub-view-profile/sub-view-profile.component';
import { SubViewMatchesComponent } from './sub-view-matches/sub-view-matches.component';

import { ListingsFilterPipe } from './pipes/listings-filter.pipe';
import { IndividualListingComponent } from './individual-listing/individual-listing.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'edit-profile', component: EditProfileComponent},
	{ path: 'new-user', component: NewUserComponent }, // log in page for sub
	{ path: 'register', component: RegisterComponent },
	{ path: 'school-home', component: SchoolHomeComponent},
	{ path: 'school-create-new-listing', component: SchoolCreateNewListingComponent},
	{ path: 'school-view-open-listings', component: SchoolViewOpenListingsComponent},
	{ path: 'school-view-confirmed-listings', component: SchoolViewConfirmedListingsComponent},
	{ path: 'school-view-profile', component: SchoolViewProfileComponent},
	{ path: 'sub-home', component: SubHomeComponent},
	{ path: 'sub-view-open-listings', component: SubViewOpenListingsComponent},
	{ path: 'sub-view-confirmed-matches', component: SubViewConfirmedMatchesComponent},
	{ path: 'sub-view-profile', component: SubViewProfileComponent},
	{ path: 'sub-view-matches', component: SubViewMatchesComponent},
	{ path: 'messaging', component: MessagingComponent },
	{ path: 'school-chat', component: SchoolChatComponent},
	{ path: 'individual-listing', component: IndividualListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [ListingsFilterPipe],
  exports: [
	  RouterModule,
	  ListingsFilterPipe]
})
export class AppRoutingModule { }
