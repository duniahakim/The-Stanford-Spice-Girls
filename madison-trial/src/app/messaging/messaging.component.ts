import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; // deleted AuthProviders, AuthMethods

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFire) {
      this.items = af.database.list('/messages', {
        query: {
          limitToLast: 5
        }
      });
  }
}

export class MessagingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
