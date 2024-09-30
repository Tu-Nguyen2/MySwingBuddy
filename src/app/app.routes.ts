import { Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'UserHome',
        component: UserHomeComponent
    },
    {
        path:'MySwingBuddy',
        component: MySwingBuddyComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
];
