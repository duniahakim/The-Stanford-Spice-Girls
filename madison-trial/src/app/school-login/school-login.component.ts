import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-school-login',
  templateUrl: './school-login.component.html',
  styleUrls: ['./school-login.component.css']
})
export class SchoolLoginComponent implements OnInit {

  name: string = '';
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
  	private router: Router,
  	// public authService: AuthService,
  	private fb: FormBuilder
  ) {
  	this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

	tryLogin(value){
		this.router.navigate(['/school-home']);
	}
  //   this.authService.doLogin(value)
  //   .then(res => {
  //     this.router.navigate(['/school-home']);
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //   })
  // }

  ngOnInit(): void {
  }

}
