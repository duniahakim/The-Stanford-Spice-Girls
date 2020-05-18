import { Component, OnInit } from '@angular/core';
import { User } from  'firebase';

@Component({
  selector: 'app-sub-view-profile',
  templateUrl: './sub-view-profile.component.html',
  styleUrls: ['./sub-view-profile.component.css']
})
export class SubViewProfileComponent implements OnInit {

  constructor() { }

  userItems = localStorage.getItem('user');
  user: User = JSON.parse(this.userItems);
  email = this.user.email;
  name = this.user.displayName;
  photoUrl = this.user.photoURL;

  //localStorage.setItem('userUID', user.uid);

  ngOnInit(): void {
  }

}
