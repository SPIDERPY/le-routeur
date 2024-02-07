import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';
import { SignupComponent } from './menu/signup/signup.component';
import { UserComponent } from './menu/user/user.component';
import { ProfilComponent } from './menu/user/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    UserComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
