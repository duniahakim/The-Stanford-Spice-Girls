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
      this.subHeader = false;
      this.schoolHeader = false;
  	}
  }

  changeHeader() {
  	this.loginstatus = 'Logout';
  	this.routerLink = '';
    this.subHeader = true;
  }

  changeSchoolHeader() {
    this.loginstatus = 'Logout';
    this.routerLink = '';
    this.schoolHeader = true;
  }

}
