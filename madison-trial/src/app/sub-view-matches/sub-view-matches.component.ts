import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-view-matches',
  templateUrl: './sub-view-matches.component.html',
  styleUrls: ['./sub-view-matches.component.css']
})
export class SubViewMatchesComponent implements OnInit {

  ALL_LISTINGS: Object[] = [
    {id: 1, school_name:'STRIVE Prep - SMART', subject: 'Algebra II', grade: '9', date: 'Wednesday May 20, 2020', time: '8:30 AM', pay_rate: '$110/day', teacher_name: 'Sarah James', teacher_email: 'sarahjames@STRIVE.edu'},
    {id: 2, school_name:'Science and Engineering Magnet School', subject: 'Pre-Calculus', grade: '10', date: 'Thursday May 21, 2020', time: '8:30 AM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@SEM.edu'},
    {id: 3, school_name:'Stanford High School', subject: 'AP Calculus AB', grade: '11', date: 'Tuesday May 26, 2020', time: '8:30 AM', pay_rate: '$120/day', teacher_name: 'Jonathan Ramirez', teacher_email: 'jonramirez@stanfordhigh.edu'}
  ];

  filter_by: string;
  searchString: string;

  constructor() { }

  ngOnInit(): void {
  }

}
