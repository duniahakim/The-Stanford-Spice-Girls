import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Sub } from '../sub-interface/sub'

@Component({
  selector: 'app-sub-view-profile',
  templateUrl: './sub-view-profile.component.html',
  styleUrls: ['./sub-view-profile.component.css']
})
export class SubViewProfileComponent implements OnInit {
	// User data from auth module
	user: User = JSON.parse(localStorage.getItem('user'));
	email = this.user.email;
	uid = this.user.uid;
	photoUrl = this.user.photoURL;

  article: any;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;


  constructor(public db: AngularFirestore) {

    this.itemsCollection = db.collection<any>('users');
    this.items = this.itemsCollection.valueChanges();

    this.itemsCollection.doc(this.email).ref.get().then((doc) => {
        this.article = doc.data();
      });
  }

  ngOnInit(): void {
  }

}
