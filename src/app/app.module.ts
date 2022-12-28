import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
