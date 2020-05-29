import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  selectedValue: string = '';

  constructor( 
    public db: AngularFireDatabase,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required],
      name: [''],
      type: [''],
      grade: [''],
      district: [''],
      subject: [''],
      bio: [''],
      education:[''],
      teaching:[''],
      other:['']
    });
  }

 tryRegister(value){
   this.authService.register(value)
   .then(res => {
     this.errorMessage = "";
     this.successMessage = "Your account has been created! Please log in using the link below.";
   }, err => {
     console.log(err);
     this.errorMessage = err.message;
     this.successMessage = "";
   })
 }


  ngOnInit(): void {
  }

}
