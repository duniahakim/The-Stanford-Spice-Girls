import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { SchoolChatComponent } from './schoolchat/schoolchat.component';
import { IndividualListingComponent } from './individual-listing/individual-listing.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AngularFireStorageModule } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAscTztvYV091FR8nUcX9cQBf5SIGHghaM",
  authDomain: "cs194-48dd8.firebaseapp.com",
  databaseURL: "https://cs194-48dd8.firebaseio.com",
  projectId: "cs194-48dd8",
  storageBucket: "cs194-48dd8.appspot.com",
  messagingSenderId: "124531208729",
  appId: "1:124531208729:web:52cb027f8f490267cab088",
  measurementId: "G-HP69NBHD3Y"
};


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    SchoolHomeComponent,
    SchoolCreateNewListingComponent,
    SchoolViewOpenListingsComponent,
    SchoolViewConfirmedListingsComponent,
    SchoolViewProfileComponent,
    SubHomeComponent,
    SubViewOpenListingsComponent,
    SubViewConfirmedMatchesComponent,
    SubViewProfileComponent,
    SubViewMatchesComponent,
    RegisterComponent,
    EditProfileComponent,
    MessagingComponent,
    SchoolChatComponent,
    IndividualListingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
 	  AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GooglePlaceModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
