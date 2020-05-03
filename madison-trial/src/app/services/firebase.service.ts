import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

	constructor(public db: AngularFirestore) {}

	createUser(value) {
	  return this.db.collection('users').add({
	    name: value.name,
	    nameToSearch: value.name.toLowerCase(),
	    surname: value.surname,
	    age: parseInt(value.age),
	  });
	}
}