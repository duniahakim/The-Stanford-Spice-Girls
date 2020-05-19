import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MessagingComponent } from './messaging/messaging.component';
import { SchoolChatComponent } from './schoolchat/schoolchat.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'new-user', component: NewUserComponent },
	{ path: 'messaging', component: MessagingComponent },
	{ path: 'school-chat', component: SchoolChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
