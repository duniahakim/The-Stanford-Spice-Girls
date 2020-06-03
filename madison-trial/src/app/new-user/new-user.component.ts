import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router, Params } from '@angular/router';
import { AppComponent } from '../app.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  name: string = '';
  loginForm: FormGroup;
  article: any;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
  	private router: Router,
  	private authService: AuthService,
  	private fb: FormBuilder,
  	private appC: AppComponent,
    public db: AngularFirestore
  ) {
  	this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

	async tryLogin(value) {
	  this.authService.login(value.email, value.password)
	    .then(res => {
        // get user type to determine router link
        this.itemsCollection = this.db.collection('users');
        this.itemsCollection.doc(value.email).ref.get().then((doc) => {
            if (doc.exists) {
              this.article = doc.data();
              if (this.article.type == "school") {
                localStorage.setItem('type', "school");
                this.appC.changeSchoolHeader();
                this.router.navigate(["/school-home"]);
              } else if (this.article.type == "sub") {
                localStorage.setItem('type', "sub");
                this.appC.changeHeader();
                this.router.navigate(["/sub-home"]);
              }
            }
          });
	    }, err => {
	      console.log(err);
        confirm(err.message);
	    })
	  }

  ngOnInit(): void {
  }
}
