import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from  'firebase';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sub-view-open-listings',
  templateUrl: './sub-view-open-listings.component.html',
  styleUrls: ['./sub-view-open-listings.component.css']
})
export class SubViewOpenListingsComponent implements OnInit {

  // ALL_LISTINGS: Object[] = [
  //   {id: 1, school_name:'STRIVE Prep - SMART', subject: 'Algebra II', grade: '10', date: 'Wednesday May 20, 2020', time: '11:20 AM', pay_rate: '$100/day', teacher_name: 'Sarah James', teacher_email: 'sarahjames@STRIVE.edu'},
  //   {id: 2, school_name:'Science and Engineering Magnet School', subject: 'AP Biology', grade: '11', date: 'Thursday May 21, 2020', time: '1:00 PM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@SEM.edu'},
  //   {id: 3, school_name:'Stanford High School', subject: 'World Geography', grade: '9', date: 'Tuesday May 26, 2020', time: '8:30 AM', pay_rate: '$120/day', teacher_name: 'Jonathan Ramirez', teacher_email: 'jonramirez@stanfordhigh.edu'},
  //   {id: 4, school_name:'Palo Alto High School', subject: 'English IV', grade: '12', date: 'Thursday May 28, 2020', time: '2:45 PM', pay_rate: '$130/day', teacher_name: 'Christina Marsh', teacher_email: 'chrismarsh@PAHS.edu'},
  //   {id: 5, school_name:'East High School', subject: 'Art II', grade: '10', date: 'Friday May 29, 2020', time: '11:00 AM', pay_rate: '$140/day', teacher_name: 'Jayla Thomas', teacher_email: 'jaylathomas@EHS.edu'}
  // ];
  user: User = JSON.parse(localStorage.getItem('user'));
  LISTINGS: Object[] =[];
  filter_by: string;
  searchString: string;
  private listingsCollection: AngularFirestoreCollection<any>;

  constructor(
    public db: AngularFirestore,
    private fbServ: FirebaseService
  ) {
    this.listingsCollection = db.collection('listings');

    this.listingsCollection.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().status === "open") {
          this.LISTINGS.push(doc.data());
        }
      });
    }).catch(err => {
      confirm(err.message);
      console.log('Error getting listings in sub-view-open-listings', err);
    });
  }

  confirmListing(id: string) {
    // change listing from open to closed & put id of sub into this listing
    var docRef = this.db.collection('listings').doc(id);
    docRef.update({
      status: "closed",
      subID: this.user.uid,
      subName: this.user.displayName
    });


    // users -> sub -> create collection confirmedListings 
    this.fbServ.addConfirmedListing(id).then(res => {
      confirm("Success! You have confirmed the listing.");
     }, err => {
       console.log(err);
       confirm(err.message);
     });
  }

  ngOnInit(): void {
  }

}
