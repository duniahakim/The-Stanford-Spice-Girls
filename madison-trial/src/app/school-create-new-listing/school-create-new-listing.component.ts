import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-school-create-new-listing',
  templateUrl: './school-create-new-listing.component.html',
  styleUrls: ['./school-create-new-listing.component.css']
})
export class SchoolCreateNewListingComponent implements OnInit {

  newListingForm: FormGroup;
  downloadID: string= '';
  uploadProgress: any;

  constructor(
  	private fbServ: FirebaseService,
    private fb: FormBuilder,
    private afStorage: AngularFireStorage
  ) {
  	this.newListingForm = this.fb.group({
      subject: ['', Validators.required ],
      grade: ['',Validators.required],
      teachername: ['', Validators.required],
      teacheremail: ['', Validators.required],
      datetime: ['', Validators.required],
      pay:['', Validators.required],
      lessonplan:['']
    });
  }

  upload(event) {
    document.getElementById("submitButton").setAttribute("disabled", "true");
    const randomId = Math.random().toString(36).substring(2);
    var ref = this.afStorage.ref(randomId);
    var task = ref.put(event.target.files[0]);
    this.uploadProgress = task.snapshotChanges().pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
    task.then(function() {
      document.getElementById("submitButton").removeAttribute("disabled");
    });
    this.downloadID = randomId;
    console.log(this.downloadID);
  }

  tryCreateListing(value) {
    console.log(this.downloadID);
   this.fbServ.createListing(value, this.downloadID)
   .then(res => {
      confirm("Success! Listing has been created.");
   }, err => {
     console.log(err);
     confirm(err.message);
   })
 }

  ngOnInit(): void {
  }

}
