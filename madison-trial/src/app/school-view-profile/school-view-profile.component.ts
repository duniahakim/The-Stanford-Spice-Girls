import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-view-profile',
  templateUrl: './school-view-profile.component.html',
  styleUrls: ['./school-view-profile.component.css']
})
export class SchoolViewProfileComponent implements OnInit {
  editState: boolean = false;
  field: string;
  addy: string;

  user: User = JSON.parse(localStorage.getItem('user'));
  email: any;
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

        console.log(this.email);
        this.itemsCollection.doc(this.email).ref.get().then((doc) => {
            this.article = doc.data();
        });
      });
  }

  addURL(){
    this.addy = this.article.address;
    (<HTMLInputElement>document.getElementById("frame")).src = "https://www.google.com/maps?q=" + this.addy + "&output=embed";
  }

  editItem(event, field: string){
    this.editState = true;
    this.field = field;
  }

  updateField(field: string){
    var docRef = this.db.collection('users').doc(this.email);

    if (field === 'district') {
      docRef.update({
        district: (<HTMLInputElement>document.getElementById("district")).value
      });
    }

    if (field === 'website') {
      docRef.update({
        website: (<HTMLInputElement>document.getElementById("website")).value
      });
    }

    if (field === 'address') {
      docRef.update({
        address: (<HTMLInputElement>document.getElementById("address")).value
      });
    }

    if (field === 'bio') {
      docRef.update({
        bio: (<HTMLInputElement>document.getElementById("bio")).value
      });
    }

    if (field === 'other') {
      docRef.update({
        other: (<HTMLInputElement>document.getElementById("other")).value
      });
    }

    if (field === 'classSize') {
      docRef.update({
        classSize: (<HTMLInputElement>document.getElementById("classSize")).value
      });
    }
  }
}
