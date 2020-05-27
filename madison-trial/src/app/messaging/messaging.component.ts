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
  showNoConversation: boolean = false;

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
  }

  chatSend() {
    if (this.msgVal && this.schoolId !== '') {
      this.itemsRef.push({ message: this.msgVal, name: this.user.displayName, id: this.userId});
      this.msgVal = '';
      this.af.object('/users/' + this.userId + '/schools/' + this.schoolId + '/').update({
         date: -Date.now()
       });
    } else if (this.schoolId === '') {
      this.showNoConversation = true;
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
