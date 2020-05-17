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

  constructor(public af: AngularFireDatabase) {
      this.userId = 3;

      this.listOfSchoolsRef = af.list('/' + this.userId, ref => {
        return ref.limitToLast(5)
      });
      this.listOfSchools = this.listOfSchoolsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));

      // this.schoolId = this.listOfSchools[0];
      this.schoolId = 5;
      this.setupConversation(af);
  }

  setupConversation(af: AngularFireDatabase) {
    let conversationID;
    if (this.userId > this.schoolId) {
      conversationID = this.schoolId + '-' + this.userId;
    } else {
      conversationID = this.userId + '-' + this.schoolId;
    }
    this.itemsRef = af.list('/messages/' + conversationID, ref => {
      return ref.limitToLast(5)
    });
    this.items = this.itemsRef.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    ));
  }

  chatSend(theirMessage: string) {
      this.itemsRef.push({ message: theirMessage, name: 'Ale'});
      this.msgVal = '';
  }

  // ngOnInit() {
  //   this.itemsRef = this.af.list('/messages/user1-user2');
  //   this.listOfSchools = this.af.list('/user');
  // }

  // pickedSchool(event) {
  //   this.schoolId = event.target.value;
  //   setupConversation();
  // }
}
