import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { Router } from "@angular/router";

@Component({
  selector: 'app-sub-view-confirmed-matches',
  templateUrl: './sub-view-confirmed-matches.component.html',
  styleUrls: ['./sub-view-confirmed-matches.component.css']
})
export class SubViewConfirmedMatchesComponent implements OnInit {

  // CONFIRMED_LISTINGS: Object[] = [
  //   {id: 2, school_name:'Science and Engineering Magnet School', subject: 'AP Biology', grade: '11', date: 'Thursday May 21, 2020', time: '1:00 PM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@SEM.edu'},
  //   {id: 4, school_name:'Palo Alto High School', subject: 'English IV', grade: '12', date: 'Thursday May 28, 2020', time: '2:45 PM', pay_rate: '$130/day', teacher_name: 'Christina Marsh', teacher_email: 'chrismarsh@PAHS.edu'}
  // ];

  // LISTINGS: Object[] =[];
  // user: User = JSON.parse(localStorage.getItem('user'));

  // // CONFIRMED_LISTINGS: Object[] = [
  // //   {id: 1, sub_name: 'Madison Hall', subject: 'Algebra II', grade: '10', date: 'Wednesday May 20, 2020', time: '11:20 AM', pay_rate: '$100/day', teacher_name: 'Sarah James', teacher_email: 'sarahjames@STRIVE.edu'},
  // //   {id: 2, sub_name: 'Sanura Njaka', subject: 'AP Biology', grade: '11', date: 'Thursday May 21, 2020', time: '1:00 PM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@STRIVE.edu'},
  // //   {id: 3, sub_name: 'Jailene Miranda', subject: 'World Geography', grade: '9', date: 'Tuesday May 26, 2020', time: '8:30 AM', pay_rate: '$120/day', teacher_name: 'Jonathan Ramirez', teacher_email: 'jonramirez@STRIVE.edu'},
  // //   {id: 4, sub_name: 'Dunia Hakim', subject: 'English IV', grade: '12', date: 'Thursday May 28, 2020', time: '2:45 PM', pay_rate: '$130/day', teacher_name: 'Christina Marsh', teacher_email: 'chrismarsh@STRIVE.edu'},
  // //   {id: 5, sub_name: 'Ale Rodriguez', subject: 'Art II', grade: '10', date: 'Friday May 29, 2020', time: '11:00 AM', pay_rate: '$140/day', teacher_name: 'Jayla Thomas', teacher_email: 'jaylathomas@STRIVE.edu'}
  // // ];

  

  //subID
  filter_by: string;
  searchString: string;
  LISTINGS: Object[] =[];
  user: User = JSON.parse(localStorage.getItem('user'));
  private listingsCollection: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public af: AngularFireDatabase, private router: Router) {
    this.listingsCollection = db.collection<any>('users').doc(this.user.email).collection<any>('listings');

    this.listingsCollection.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        db.collection('listings').doc(doc.id).ref.get().then((doc) => {
          if (doc.data().status === "closed") {
            this.LISTINGS.push(doc.data());
          }
        });
      });
    }).catch(err => {
      console.log('Error getting documents', err);
    });   
  }

  createChat(schoolId: any, schoolName: any) {
    let conversationId;
    if (schoolId > this.user.uid) {
      conversationId = this.user.uid + '-' + schoolId;
    } else {
      conversationId = schoolId + '-' + this.user.uid;
    }

    this.af.object('/schools/' + schoolId + '/teachers' + this.user.uid + '/').update({
      id: schoolId,
      name: schoolName,
      date: Date.now()
    });
    this.af.object('/users/' + this.user.uid + '/schools/' + schoolId + '/').update({
      id: this.user.uid,
      name: this.user.displayName,
      date: Date.now()
    });
    this.af.object('/messages/' + conversationId + '/');
    // this.listOfChatsRef = this.af.list('messages/' + conversationId);
    // this.subsRef = this.af.list('/users/' + this.user.uid + '/schools/' + schoolId);
    // this.schoolRef = this.af.list('/schools/' + schoolId + '/teachers/');
    this.router.navigate(['/messaging']);
    

  }

  ngOnInit(): void {
  }

}
