import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { Sub } from '../sub-interface/sub'

@Component({
  selector: 'app-sub-view-profile',
  templateUrl: './sub-view-profile.component.html',
  styleUrls: ['./sub-view-profile.component.css']
})
export class SubViewProfileComponent implements OnInit {
	// User data from auth
	user: User = JSON.parse(localStorage.getItem('user'));
	email = this.user.email;
	//name = this.user.displayName;
	uid = this.user.uid;
	photoUrl = this.user.photoURL;

	// User data from Firestore
  district: string = '';
  subject: string = '';
  bio: string = '';
  education:string = '';
  teaching: string = '';
  name: string = '';

	userAtt: string = '';
	sub: Sub;

  constructor(private fireServ: FirebaseService) {
  	this.fireServ.getUser(this.email);
  	this.userAtt = localStorage.getItem('userAtt');
  	this.sub = JSON.parse(this.userAtt);
    this.name = this.sub.name;
  	this.district = this.sub.district;
	  this.subject = this.sub.subject;
	  this.bio = this.sub.bio;
	  this.education = this.sub.education;
	  this.teaching = this.sub.teaching;
  	console.log(this.sub);
  }

  ngOnInit(): void {
  }

}
