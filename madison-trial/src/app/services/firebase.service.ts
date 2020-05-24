import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

	constructor(public db: AngularFirestore) {}

	createUser(value) {
	  return this.db.collection('users').doc(value.email).set({
	    name: value.name,
	    nameToSearch: value.name.toLowerCase(),
	    email: value.email,
		district: value.district,
		subject: value.subject,
		bio: value.bio,
		education: value.education,
		teaching: value.teaching
	  });
	}

	getUser(email:string) {
		var docRef = this.db.collection("users").doc(email);
		docRef.get().toPromise().then(function(doc) {
		    if (doc.exists) {
		        localStorage.setItem('userAtt', JSON.stringify(doc.data()));
		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
		}).catch(function(error) {
		    console.log("Error getting document:", error);
		});
	}

	createListing(value) {
		return this.db.collection('listings').add({
			subject: value.subject,
			grade: value.grade,
			teachername: value.teachername,
			teacherEmail: value.teacherEmail,
			datetime: value.datetime,
			pay: value.pay,
			lessonplan: value.lessonplan
	  });
  	}
}