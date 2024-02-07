import { Routes } from "@angular/router"; 
import { MenuComponent } from "./menu/menu.component";
import { SignupComponent } from "./menu/signup/signup.component";
import { UserComponent } from "./menu/user/user.component";
import { ProfilComponent } from "./menu/user/profil/profil.component";


const ROUTES: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'menu/signup', component: SignupComponent },
    { 
        path: 'menu/user', component: UserComponent ,
        children: [
            { path: 'user/profil', component: ProfilComponent },
        ]
    }
    
    
    
];
export { ROUTES };