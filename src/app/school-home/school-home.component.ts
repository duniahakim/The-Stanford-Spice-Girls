import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.css']
})
export class SchoolHomeComponent implements OnInit {
  
  schoolName = JSON.parse(localStorage.getItem('user')).displayName;
  
  constructor() { }

  ngOnInit(): void {
  }

}
