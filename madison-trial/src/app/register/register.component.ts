import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
  	this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
  // constructor(
  //   public authService: AuthService,
  //   private router: Router,
  //   private fb: FormBuilder
  // ) {
  //   this.createForm();
  //  }

  //  createForm() {
  //    this.registerForm = this.fb.group({
  //      email: ['', Validators.required ],
  //      password: ['',Validators.required]
  //    });
  //  }

   // tryRegister(value){
   //   this.authService.doRegister(value)
   //   .then(res => {
   //     console.log(res);
   //     this.errorMessage = "";
   //     this.successMessage = "Your account has been created";
   //   }, err => {
   //     console.log(err);
   //     this.errorMessage = err.message;
   //     this.successMessage = "";
   //   })
   // }


  ngOnInit(): void {
  }

}
