import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AngularFireAuth } from  "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sub Help';
  loginstatus = 'Sign up';
  routerLink = '/register';
  subHeader = false;
  schoolHeader = false;
  headerRouter = '';
  notLoggedIn = true;


  constructor(
    private authService: AuthService,
    public  afAuth:  AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      // && this.authService.isLoggedIn
      if (user) {
        this.notLoggedIn = false;
        if (localStorage.getItem('type') === "school") {
          this.changeSchoolHeader();
        } else if (localStorage.getItem('type') === "sub") {
          this.changeHeader();
        }
      }
    })
  }

  tryLogout() {
  	if (this.authService.isLoggedIn) {
  		this.authService.logout();
  		this.loginstatus = 'Sign up';
  		this.routerLink = '/register';
      this.headerRouter = '';
      this.subHeader = false;
      this.schoolHeader = false;
      this.notLoggedIn = true;
  	}
  }

  changeHeader() { // change Sub view header
  	this.loginstatus = 'Logout';
  	this.routerLink = '';
    this.headerRouter = '/sub-home';
    this.subHeader = true;
  }

  changeSchoolHeader() {
    this.loginstatus = 'Logout';
    this.headerRouter = '/school-home';
    this.routerLink = '';
    this.schoolHeader = true;
  }

}
