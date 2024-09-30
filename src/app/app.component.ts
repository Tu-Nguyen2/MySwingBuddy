import { Component } from '@angular/core';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing-App';
}

const routes: Routes = [
  {path: 'UserHome', component: UserHomeComponent},
  {path: 'MySwingBuddy', component: MySwingBuddyComponent},
  {path: '**', component: PageNotFoundComponent}
]

