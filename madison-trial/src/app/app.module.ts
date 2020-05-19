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
import { SchoolLoginComponent } from './school-login/school-login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { SchoolChatComponent } from './schoolchat/schoolchat.component';

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
    SchoolLoginComponent,
    EditProfileComponent,
    MessagingComponent,
    SchoolChatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
 	  AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
