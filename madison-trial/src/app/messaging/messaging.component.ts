import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';


@Component({
  selector: 'app-messaging',
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

  constructor(public af: AngularFireDatabase) {
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

      // this.user = this.userRef.snapshotChanges().pipe(
      // map(changes =>
      //   changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
      // ));

      // this.schoolId = 1;
      this.setupConversation();

  }

  setupConversation() {
    console.log(this.userId);
    let conversationID;
    if (this.userId > this.schoolId) {
      conversationID = this.schoolId + '-' + this.userId;
    } else {
      conversationID = this.userId + '-' + this.schoolId;
    }

    console.log(conversationID);
    this.itemsRef = this.af.list('/messages/' + conversationID);
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    ));
  }

  chatSend() {
    if (this.msgVal) {
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

  // ngOnInit() {
  //   this.itemsRef = this.af.list('/messages/user1-user2');
  //   this.listOfSchools = this.af.list('/user');
  // }

  pickedSchool(schoolId: any) {
    this.schoolId = schoolId;
    this.setupConversation();
  }
}
