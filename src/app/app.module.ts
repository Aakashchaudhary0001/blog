import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildBComponent } from './child-b/child-b.component';
import {FormsModule} from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { ModuleCModule } from './module-c/module-c.module';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildBComponent,
    UsdInrPipe,    
  ],
  imports: [
    BrowserModule,
    ModuleAModule,
    ModuleBModule,
    ModuleCModule,
    UserAuthModule,
    NgbModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
