import { Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { MySwingBuddyComponent } from './my-swing-buddy/my-swing-buddy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:'Home',
        component: HomeComponent
    },
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
    },
    {
        path:'Login',
        component: LoginComponent
    },
    {
        path:'Register',
        component: RegisterComponent
    }
];
