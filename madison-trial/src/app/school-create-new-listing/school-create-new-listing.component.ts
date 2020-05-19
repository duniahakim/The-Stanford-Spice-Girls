import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-school-create-new-listing',
  templateUrl: './school-create-new-listing.component.html',
  styleUrls: ['./school-create-new-listing.component.css']
})
export class SchoolCreateNewListingComponent implements OnInit {

  newListingForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
  	private fbServ: FirebaseService,
  	private fb: FormBuilder
  ) {
  	this.newListingForm = this.fb.group({
      subject: ['', Validators.required ],
      grade: ['',Validators.required],
      teachername: ['', Validators.required],
      teacherEmail: ['', Validators.required],
      datetime: ['', Validators.required],
      pay:['', Validators.required],
      lessonplan:['']
    });
  }

  tryCreateListing(value){
   this.fbServ.createListing(value)
   .then(res => {
     this.errorMessage = "";
     this.successMessage = "Success! Listing has been created.";
   }, err => {
     console.log(err);
     this.errorMessage = err.message;
     this.successMessage = "";
   })
 }

  ngOnInit(): void {
  }

}
