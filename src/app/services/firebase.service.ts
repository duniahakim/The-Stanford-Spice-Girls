import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
	user: User = JSON.parse(localStorage.getItem('user'));

	constructor(public db: AngularFirestore) {}

	createUser(value) {
		if (value.type === "school") { // Register a school
			return this.db.collection('users').doc(value.email).set({
		    name: value.name,
		    nameToSearch: value.name.toLowerCase(),
		    email: value.email.toLowerCase(),
  			district: value.district,
  			type: value.type,
  			bio: value.bio,
  			other: value.other,
  			address: value.address,
  			classSize: value.classSize,
  			website: value.website,
  			photo: value.photo
	  });
		} else {
			return this.db.collection('users').doc(value.email).set({
		    name: value.name,
		    nameToSearch: value.name.toLowerCase(),
		    email: value.email.toLowerCase(),
  			district: value.district,
  			type: value.type,
  			subject: value.subject,
  			bio: value.bio,
  			education: value.education,
  			teaching: value.teaching
	  });
		}
	}

	createListing(value, downloadURL: any) {
		// add listing metadata
		// ID is listing id
		const id = this.db.createId();
		this.db.collection('listings').doc(id).set({
			subject: value.subject,
			grade: value.grade,
			teacherName: value.teachername,
			schoolName: this.user.displayName,
			teacherEmail: value.teacheremail,
			datetime: value.datetime,
			pay: value.pay,
			status: "open",
			schoolID: this.user.uid,
      		schoolEmail: this.user.email,
	  		id: id,
	  		downloadURL: downloadURL
	  });

		// add to school open listings
		return this.db.collection('users')
			.doc(this.user.email).collection("listings").doc(id).set({});
  	}

	// users -> sub -> create collection confirmedListings
	// [id] is ID of listing
  	addConfirmedListing(id: any) {
  		return this.db.collection('users')
			.doc(this.user.email).collection("listings").doc(id).set({});
  	}
}
