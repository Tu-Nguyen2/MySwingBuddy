import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { UserNavBarComponent } from "../user-nav-bar/user-nav-bar.component";

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [LoginComponent, UserNavBarComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
