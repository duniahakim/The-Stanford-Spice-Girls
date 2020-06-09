import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-school-view-open-listings',
  templateUrl: './school-view-open-listings.component.html',
  styleUrls: ['./school-view-open-listings.component.css']
})
export class SchoolViewOpenListingsComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));

  LISTINGS: Object[] =[];

  filter_by: string;
  searchString: string;

  private listingsCollection: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, private afStorage: AngularFireStorage) {
    this.listingsCollection = db.collection<any>('users').doc(this.user.email).collection<any>('listings');

    this.listingsCollection.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        db.collection('listings').doc(doc.id).ref.get().then((doc) => {
          if (doc.data().status == "open") {
            this.LISTINGS.push(doc.data());
          }
        });
      });
    }).catch(err => {
      console.log('Error getting documents', err);
    });


  }

  downloadLesson(url: any) {
    this.afStorage.ref(url).getDownloadURL().toPromise().then(function (downloadURL) {
      var link = document.createElement("a");
      if (link.download !== undefined) {
          link.setAttribute("href", downloadURL);
          link.setAttribute("target", "_blank");
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
    })
  }

  ngOnInit(): void {
  }

}
