import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-school-view-profile',
  templateUrl: './school-view-profile.component.html',
  styleUrls: ['./school-view-profile.component.css']
})
export class SchoolViewProfileComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));
  email = this.user.email;
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
