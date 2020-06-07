import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit {

  subName = JSON.parse(localStorage.getItem('user')).displayName;

  constructor() { }

  ngOnInit(): void {
  }

}
