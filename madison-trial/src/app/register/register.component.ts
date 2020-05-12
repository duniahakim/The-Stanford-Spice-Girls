import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor() {}


  ngOnInit(): void {
  }

}
