import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { User3Component } from './user3/user3.component';
import { User4Component } from './user4/user4.component';
import { User5Component } from './user5/user5.component';

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component,
    HomepageComponent,
    GroupchatComponent,
    User3Component,
    User4Component,
    User5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
