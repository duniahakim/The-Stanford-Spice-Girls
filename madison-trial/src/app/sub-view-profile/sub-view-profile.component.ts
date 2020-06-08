import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Sub } from '../sub-interface/sub'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-view-profile',
  templateUrl: './sub-view-profile.component.html',
  styleUrls: ['./sub-view-profile.component.css']
})
export class SubViewProfileComponent implements OnInit {
  // User data from auth module
  editState: boolean = false;
  field: string;

	user: User = JSON.parse(localStorage.getItem('user'));
	email: any;
  uid = this.user.uid;
	photoUrl = this.user.photoURL;

  article: any;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  sub: any;


  constructor(private route: ActivatedRoute,
    private router: Router, public db: AngularFirestore) {

  }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
        if (params['email']) {
          this.email = params['email'];
        } else {
          this.email = this.user.email;
        }
        this.itemsCollection = this.db.collection<any>('users');
        this.items = this.itemsCollection.valueChanges();

        this.itemsCollection.doc(this.email).ref.get().then((doc) => {
            this.article = doc.data();
        });
      });
  }

  editItem(event, field: string){
    this.editState = true;
    this.field = field;
  }

  updateField(field: string){
    var docRef = this.db.collection('users').doc(this.email);

    if (field === 'name') {
      docRef.update({
        name: (<HTMLInputElement>document.getElementById("name")).value
      });
      docRef.update({
        nameToSearch: (<HTMLInputElement>document.getElementById("name")).value.toLowerCase()
      });
      this.user.displayName = (<HTMLInputElement>document.getElementById("name")).value;
    }

    if (field === 'district') {
      docRef.update({
        district: (<HTMLInputElement>document.getElementById("district")).value
      });
    }

    if (field === 'subject') {
      docRef.update({
        subject: (<HTMLInputElement>document.getElementById("subject")).value
      });
    }

    if (field === 'bio') {
      docRef.update({
        bio: (<HTMLInputElement>document.getElementById("bio")).value
      });
    }

    if (field === 'education') {
      docRef.update({
        education: (<HTMLInputElement>document.getElementById("education")).value
      });
    }

    if (field === 'experience') {
      docRef.update({
        teaching: (<HTMLInputElement>document.getElementById("experience")).value
      });
    }
  }
}
