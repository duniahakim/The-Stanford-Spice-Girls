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
import { MessagingComponent } from './messaging/messaging.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SchoolChatComponent } from './schoolchat/schoolchat.component';


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

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    MessagingComponent,
    SchoolChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),  //changed from environment.firebase to firebaseConfig
 	  AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
