import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ClarityModule} from '@clr/angular';
import { HomeComponent } from './modules/general/home/home.component';
import { ProfilComponent } from './modules/general/profil/profil.component';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    MailComponent,
    SingleMailComponent,
    LoginComponent,
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
