import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  name: string = '';
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
