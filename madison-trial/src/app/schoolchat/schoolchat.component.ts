import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';


@Component({
  selector: 'app-schoolchat',
  templateUrl: './schoolchat.component.html',
  styleUrls: ['./schoolchat.component.css']
})

export class SchoolChatComponent{ //implements OnInit{
  // items: Observable<any>;
  email: string = '';
  name: string = '';
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msgVal: string = '';
  listOfTeachersRef: AngularFireList<any>;
  listOfTeachers: Observable<any[]>;
  userId: string = '';
  schoolId: string = '';
  schoolRef: AngularFireList<any>;
  school: Observable<any[]>;
  user: User = JSON.parse(localStorage.getItem('user'));
  

  constructor(public af: AngularFireDatabase) {
      this.schoolId = this.user.uid;
      this.af = af;
      this.name = this.user.displayName;
      this.email = this.user.email;

      this.listOfTeachersRef = af.list('/schools/' + this.schoolId + '/teachers');
      this.listOfTeachers = this.listOfTeachersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));

      this.schoolRef = af.list('/schools/' + this.schoolId);
      this.school = this.schoolRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
      ));

      // this.schoolId = 1;
      this.setupConversation();
      //this.userRef.update( name, this.username );

  }

  setupConversation() {
    let conversationID;
    if (this.userId > this.schoolId) {
      conversationID = this.schoolId + '-' + this.userId;
    } else {
      conversationID = this.userId + '-' + this.schoolId;
    }
    //commented out part that only retrieves last few messages
    // this.itemsRef = this.af.list('/messages/' + conversationID, ref => {
    //   return ref.limitToLast(5)
    // });
    this.itemsRef = this.af.list('/messages/' + conversationID);
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    ));
  }

  // chatSend(theirMessage: string) {
  //   console.log(theirMessage);
  //     this.itemsRef.push({ message: theirMessage, name: "Ale"});
  //     this.msgVal = '';
  // }

  chatSend() {
    this.itemsRef.push({ message: this.msgVal, name: this.name, id: this.schoolId});
    this.msgVal = '';

    //scrolling to bottom of chat
    // let messageHistory = document.getElementById('msg_history')
    // messageHistory.scrollTop = messageHistory.scrollHeight - messageHistory.clientHeight;
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
