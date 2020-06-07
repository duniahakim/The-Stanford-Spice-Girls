import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';


@Component({
  selector: 'app-schoolchat',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './schoolchat.component.html',
  styleUrls: ['./schoolchat.component.css']
})

// Code for startinng new chat with new teacher
 //   this.af.object('/schools/' + this.schoolId + '/teachers/' + this.userId + '/').update({
 //    id: this.userId,
 //    name: this.userName,
 //    date: -Date.now()
 //  });
 //  this.af.object('/users/' + this.userId + '/schools/' + this.schoolId + '/').update({
 //   id: this.schoolId,
 //   name: this.schoolName,
 //   date: -Date.now()
 // });


export class SchoolChatComponent{ //implements OnInit{
  confirmedListings: {[key: string]: Object} = {};
  email: string = '';
  name: string = '';
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msgVal: string = '';
  listOfTeachersRef: AngularFireList<any>;
  listOfTeachers: Observable<any[]>;
  teacherRef: AngularFireList<any>;
  userId: string = '';
  schoolId: string = '';
  schoolRef: AngularFireList<any>;
  school: Observable<any[]>;
  user: User = JSON.parse(localStorage.getItem('user'));
  newSchoolRef: AngularFireList<any>;
  showDropdown: boolean = false;
  private listingsCollection: AngularFirestoreCollection<any>;




  constructor(public db: AngularFirestore, public af: AngularFireDatabase) {
      this.schoolId = this.user.uid;
      this.af = af;
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.schoolRef = af.list('/schools/' + this.schoolId);
      this.school = this.schoolRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
      ));
      this.listOfTeachersRef = af.list('/schools/' + this.schoolId + '/teachers', ref =>
        ref.orderByChild('date')
      );

      this.listOfTeachers = this.listOfTeachersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));

      this.listOfTeachers.subscribe( teachers => {
        if (teachers.length !== 0) {
          if (this.userId === '') {
            this.userId = teachers[0]['id'];
            this.setupConversation();
          } else {
            this.userId = teachers[0]['id'];
          }
        }
       });
       this.setupConversation();

       this.listingsCollection = db.collection<any>('users').doc(this.user.email).collection<any>('listings');

       this.listingsCollection.get().toPromise().then(snapshot => {
         snapshot.forEach(doc => {
           db.collection('listings').doc(doc.id).ref.get().then((doc) => {
             if (doc.data() && doc.data().status === "closed") {
               this.confirmedListings[doc.data().teacherName] = doc.data();
             }
           });
         });
       }).catch(err => {
         console.log('Error getting documents', err);
       });
  }

  startConversation() {
    this.showDropdown = true;
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
  }


  chatSend() {
    if (this.msgVal && this.userId !== '') {
      this.itemsRef.push({ message: this.msgVal, name: this.name, id: this.schoolId});
      this.msgVal = '';
      this.af.object('/schools/' + this.schoolId + '/teachers/' + this.userId + '/').update({
         date: -Date.now()
       });
    }

    //scrolling to bottom of chat
    // let messageHistory = document.getElementById('msg_history')
    // messageHistory.scrollTop = messageHistory.scrollHeight - messageHistory.clientHeight;
  }

  createChat(subID, subName) {
    this.showDropdown = false;
    this.af.object('/schools/' + this.schoolId + '/teachers/' + subID + '/').update({
       id: subID,
       name: subName,
       date: -Date.now()
     });
     this.af.object('/users/' + subID + '/schools/' + this.schoolId + '/').update({
      id: this.schoolId,
      name: this.name,
      date: -Date.now()
    });
    this.pickedTeacher(subID);
  }

  // ngOnInit() {
  //   this.itemsRef = this.af.list('/messages/user1-user2');
  //   this.listOfSchools = this.af.list('/user');
  // }

  pickedTeacher(userId: any) {
    this.userId = userId;
    this.setupConversation();
  }
}
