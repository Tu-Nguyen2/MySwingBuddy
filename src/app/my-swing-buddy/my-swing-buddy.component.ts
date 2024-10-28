import { Component } from '@angular/core';
import { UserNavBarComponent } from "../user-nav-bar/user-nav-bar.component";

@Component({
  selector: 'app-my-swing-buddy',
  standalone: true,
  imports: [UserNavBarComponent],
  templateUrl: './my-swing-buddy.component.html',
  styleUrl: './my-swing-buddy.component.css'
})
export class MySwingBuddyComponent {

}
