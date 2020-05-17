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
      
      // this.schoolId = this.listOfSchools[0];
      this.schoolId = 5;
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
    this.itemsRef = this.af.list('/messages/' + conversationID, ref => {
      return ref.limitToLast(5)
    });
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    ));
  }

  chatSend(theirMessage: string) {
      this.itemsRef.push({ message: theirMessage, name: this.userRef.name});
      this.msgVal = '';
  }

  // ngOnInit() {
  //   this.itemsRef = this.af.list('/messages/user1-user2');
  //   this.listOfSchools = this.af.list('/user');
  // }

  pickedSchool(event: any) {
    this.schoolId = event.target.name;
    console.log(this.schoolId);
    this.setupConversation();
  }
}
