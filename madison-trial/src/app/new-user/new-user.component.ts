import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router, Params } from '@angular/router';
import { AppComponent } from '../app.component';
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

  constructor(
  	private router: Router,
  	private authService: AuthService,
  	private fb: FormBuilder,
  	private appC: AppComponent
  ) {
  	this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

	tryLogin(value) {
	    this.authService.login(value.email, value.password)
	    .then(res => {
	      this.appC.changeHeader();
	      this.router.navigate(['/sub-home']);
	    }, err => {
	      console.log(err);
	      this.errorMessage = err.message;
	    })
	  }

  ngOnInit(): void {
  }
}
