import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpApiService } from './services/http.service';
import { SignUpServiceService } from './services/sign-up-service.service';
 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent, 
   
  ],
  imports: [
    BrowserModule,
    NgbModule,FormsModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [  
    HttpApiService,
    SignUpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
