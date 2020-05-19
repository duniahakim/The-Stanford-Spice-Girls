import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user:  User;

  constructor(
  	public  afAuth:  AngularFireAuth,
  	public  router:  Router,
    private fireServ: FirebaseService
  ) {
  	this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  }

  async register(value) {
    await this.afAuth.createUserWithEmailAndPassword(value.email, value.password)

    var user = await this.afAuth.currentUser;

    user.updateProfile({
      displayName: value.name
    }).then(function() {
      console.log("name was added");
    }).catch(function(error) {
      // An error happened.
    });
    this.fireServ.createUser(value);
  }


  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('userAtt');
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}
