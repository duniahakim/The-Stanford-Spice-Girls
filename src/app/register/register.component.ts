import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {} from 'google-maps';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
  selectedValue: string = '';
  placeSearch;
  autocomplete;
  formattedAddress;
  options = {
    componentRestrictions : {
      country: ['us']
    }
  }

  constructor( 
    public db: AngularFireDatabase,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;  
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
      other:[''],
      address: [''],
      website: [''],
      classSize: [''],
      photo: ['']
    });
  }

 tryRegister(value){
   value.address = this.formattedAddress;
   this.authService.register(value)
   .then(res => {
     confirm("Your account has been created! Please log in.");
   }, err => {
     console.log(err);
     confirm(err.message);
   })
 }

  ngOnInit(): void {
  }

}
