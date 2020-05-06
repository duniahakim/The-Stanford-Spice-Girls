import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { SchoolHomeComponent } from './school-home/school-home.component';
import { SchoolCreateNewListingComponent } from './school-create-new-listing/school-create-new-listing.component';
import { SchoolViewOpenListingsComponent } from './school-view-open-listings/school-view-open-listings.component';
import { SchoolViewConfirmedListingsComponent } from './school-view-confirmed-listings/school-view-confirmed-listings.component';
import { SchoolViewProfileComponent } from './school-view-profile/school-view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    SchoolHomeComponent,
    SchoolCreateNewListingComponent,
    SchoolViewOpenListingsComponent,
    SchoolViewConfirmedListingsComponent,
    SchoolViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
