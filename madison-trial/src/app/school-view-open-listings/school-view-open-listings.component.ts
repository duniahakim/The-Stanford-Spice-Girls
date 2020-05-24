import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-view-open-listings',
  templateUrl: './school-view-open-listings.component.html',
  styleUrls: ['./school-view-open-listings.component.css']
})
export class SchoolViewOpenListingsComponent implements OnInit {

  ALL_LISTINGS: Object[] = [
    {id: 1, subject: 'Algebra II', grade: '10', date: 'Wednesday May 20, 2020', time: '11:20 AM', pay_rate: '$100/day', teacher_name: 'Sarah James', teacher_email: 'sarahjames@STRIVE.edu'},
    {id: 2, subject: 'AP Biology', grade: '11', date: 'Thursday May 21, 2020', time: '1:00 PM', pay_rate: '$110/day', teacher_name: 'Chelsea Cox', teacher_email: 'chelscox@STRIVE.edu'},
    {id: 3, subject: 'World Geography', grade: '9', date: 'Tuesday May 26, 2020', time: '8:30 AM', pay_rate: '$120/day', teacher_name: 'Jonathan Ramirez', teacher_email: 'jonramirez@STRIVE.edu'},
    {id: 4, subject: 'English IV', grade: '12', date: 'Thursday May 28, 2020', time: '2:45 PM', pay_rate: '$130/day', teacher_name: 'Christina Marsh', teacher_email: 'chrismarsh@STRIVE.edu'},
    {id: 5, subject: 'Art II', grade: '10', date: 'Friday May 29, 2020', time: '11:00 AM', pay_rate: '$140/day', teacher_name: 'Jayla Thomas', teacher_email: 'jaylathomas@STRIVE.edu'}
  ];

  filter_by: string;
  searchString: string;

  constructor() { }

  ngOnInit(): void {
  }

}
