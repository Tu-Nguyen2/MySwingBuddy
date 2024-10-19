import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
// import { Amplify } from 'aws-amplify';
// import { AppComponent } from './app/app.component';
// import amplifyconfig from './amplifyconfiguration.json';

// Amplify.configure(amplifyconfig);

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AmplifyAuthenticatorModule],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-App';
}

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'Login', component: LoginComponent},
  {path: 'UserHome', component: UserHomeComponent},
  {path: 'MySwingBuddy', component: MySwingBuddyComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'Home', component: HomeComponent}
]

