import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    UserListComponent
  ]
})
export class AppModule { }
