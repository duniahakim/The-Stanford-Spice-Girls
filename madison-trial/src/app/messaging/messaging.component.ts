import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-messaging',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

// Code to add new chat with a new school
  //  this.af.object('/users/' + this.userId + '/schools/' + this.schoolId + '/').update({
  //   id: this.schoolId,
  //   name: this.schoolName,
  //   date: Date.now()
  // });
  // this.af.object('/schools/' + this.schoolId + '/teachers/' + this.userId + '/').update({
  //    id: this.userId,
  //    name: this.userName,
  //    date: Date.now()
  //  });



export class MessagingComponent{ //implements OnInit{
  faPlus = faPlus;
  faPaperPlane = faPaperPlane;
  confirmedListings: {[key: string]: Object} = {};
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  name: any;
  msgVal: string = '';
  listOfSchoolsRef: AngularFireList<any>;
  listOfSchools: Observable<any[]>;
  userId: string = '';
  schoolId: string = '';
  user: User = JSON.parse(localStorage.getItem('user'));
  username: any;
  private listingsCollection: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public af: AngularFireDatabase) {
      this.userId = this.user.uid;
      this.af = af;
      this.username = "user1";

      this.listOfSchoolsRef = af.list('/users/' + this.userId + '/schools', ref =>
        ref.orderByChild('date')
      );
      this.listOfSchools = this.listOfSchoolsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));
      this.listOfSchools.subscribe( schools => {
        if (schools.length !== 0) {
          if (this.schoolId === '') {
            this.schoolId = schools[0]['id'];
            this.setupConversation();
          } else {
            this.schoolId = schools[0]['id'];
          }
        }
       });
      this.setupConversation();
  }


  setupConversation() {
    let conversationID;
    if (this.userId > this.schoolId) {
      conversationID = this.schoolId + '-' + this.userId;
    } else {
      conversationID = this.userId + '-' + this.schoolId;
    }

    this.itemsRef = this.af.list('/messages/' + conversationID);
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    ));

    let self = this;
    this.listingsCollection = this.db.collection<any>('users').doc(this.user.email).collection<any>('listings');
    this.listingsCollection.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        self.db.collection('listings').doc(doc.id).ref.get().then((doc) => {
          if (doc.data() && doc.data().status === "closed") {
            self.confirmedListings[doc.data().schoolID] = doc.data();
          }
        });
      });
    }).catch(err => {
      console.log('Error getting documents', err);
    });
  }

  chatSend() {
    if (this.msgVal && this.schoolId !== '') {
      this.itemsRef.push({ message: this.msgVal, name: this.user.displayName, id: this.userId});
      this.msgVal = '';
      this.af.object('/users/' + this.userId + '/schools/' + this.schoolId + '/').update({
         date: -Date.now()
       });
    }

    //scrolling to bottom of chat
    // let messageHistory = document.getElementById('msg_history')
    // messageHistory.scrollTop = messageHistory.scrollHeight - messageHistory.clientHeight;
  }

  createChat(schoolId, schoolName) {
    this.af.object('/schools/' + schoolId + '/teachers/' + this.userId + '/').update({
       id: this.userId,
       name: this.user.displayName,
       date: -Date.now()
     });
     this.af.object('/users/' + this.userId + '/schools/' + schoolId + '/').update({
      id: schoolId,
      name: schoolName,
      date: -Date.now()
    });
    this.pickedSchool(schoolId);
  }

  // ngOnInit() {
  //   this.itemsRef = this.af.list('/messages/user1-user2');
  //   this.listOfSchools = this.af.list('/user');
  // }

  pickedSchool(schoolId: any) {
    this.schoolId = schoolId;
    this.setupConversation();
  }
}
