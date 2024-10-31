import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';


Amplify.configure(outputs);



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, AmplifyAuthenticatorModule, LoginComponent, UserHomeComponent, MySwingBuddyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amplify-angular-template';
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'Login', component: LoginComponent},
  {path: 'UserHome', component: UserHomeComponent},
  {path: 'MySwingBuddy', component: MySwingBuddyComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'Home', component: HomeComponent}
]

