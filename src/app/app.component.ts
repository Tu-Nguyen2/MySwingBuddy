import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './register/register.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule, LoginComponent, UserHomeComponent, MySwingBuddyComponent, RegisterComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  authentication = true;
}
