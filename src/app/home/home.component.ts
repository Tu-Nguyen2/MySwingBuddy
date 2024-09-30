import { Component } from '@angular/core';
import { UserHomeComponent } from '../user-home/user-home.component';
import { MySwingBuddyComponent } from '../my-swing-buddy/my-swing-buddy.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home'
}

const routes: Routes = [
  {path: 'UserHome', component: UserHomeComponent},
  {path: 'MySwingBuddy', component: MySwingBuddyComponent},
]

imports: [
  UserHomeComponent,
  MySwingBuddyComponent
]