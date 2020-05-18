import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent{ //implements OnInit{
  // items: Observable<any>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  name: any;
  msgVal: string = '';
  listOfSchoolsRef: AngularFireList<any>;
  listOfSchools: Observable<any[]>;
  userId: number;
  schoolId: number;
  userRef: AngularFireList<any>;
  user: Observable<any[]>;
  username: any;

  constructor(public af: AngularFireDatabase) {
      this.userId = 3;
      this.af = af;
      this.username = "user1";

      this.listOfSchoolsRef = af.list('/users/' + this.userId + '/schools');
      this.listOfSchools = this.listOfSchoolsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));

      this.userRef = af.list('/users/' + this.userId);
      this.user = this.userRef.snapshotChanges().pipe(
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
    this.itemsRef.push({ message: this.msgVal, name: "Ale", id: this.userId});
    this.msgVal = '';

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
