import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-view-confirmed-matches',
  templateUrl: './sub-view-confirmed-matches.component.html',
  styleUrls: ['./sub-view-confirmed-matches.component.css']
})
export class SubViewConfirmedMatchesComponent implements OnInit {

  CONFIRMED_LISTINGS: Object[] = [
    {id: 2, school_name:'Science and Engineering Magnet School', subject: 'AP Biology', grade: '11', date: 'Thursday May 21, 2020', time: '1:00 PM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@SEM.edu'},
    {id: 4, school_name:'Palo Alto High School', subject: 'English IV', grade: '12', date: 'Thursday May 28, 2020', time: '2:45 PM', pay_rate: '$130/day', teacher_name: 'Christina Marsh', teacher_email: 'chrismarsh@PAHS.edu'}
  ];

  filter_by: string;
  searchString: string;

  constructor() { }

  ngOnInit(): void {
  }

}
