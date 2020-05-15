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
  	}
  }

  changeHeader() {
  	this.loginstatus = 'Logout';
  	this.routerLink = '';
  }

}
