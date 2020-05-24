import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

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


  constructor(private authService: AuthService) {
  	// if (authService.isLoggedIn) {
  	// 	this.loginstatus = 'Logout';
  	// 	this.routerLink = '';
  	// }
  }

  tryLogout() {
  	if (this.authService.isLoggedIn) {
  		this.authService.logout();
  		this.loginstatus = 'Sign up';
  		this.routerLink = '/register';
      this.headerRouter = '';
      this.subHeader = false;
      this.schoolHeader = false;
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
