import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";  // deleted AuthProviders, AuthMethods
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { AngularFireModule } from 'angularfire2';
// // for AngularFireDatabase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent implements OnInit{
  // items: Observable<any>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFireDatabase) {
      this.itemsRef = af.list('/messages', ref => {
        return ref.limitToLast(5)
      });
      this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    // this.items = this.af.list('/messages', ref => {
    //   return ref.limitToLast(5)
    // }).valueChanges();
  }

  chatSend(theirMessage: string) {
      this.itemsRef.push({ message: theirMessage, name: 'Ale'});
      this.msgVal = '';
  }

  ngOnInit() {
    this.itemsRef = this.af.list('/messages');
  }
}
