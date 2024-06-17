import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/models/customer';
import { SignUpServiceService } from '../services/sign-up-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  sellerForm!: FormGroup;
  loginForm!: FormGroup;
  showLogin: boolean = true;


  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadSeller();
    this.sellerForm = this.fb.group({
      FirstName: ['', Validators.required],
      AddressOne: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.loginForm = this.fb.group({
      Mobile: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }
  singnUp() {
    if (this.sellerForm.valid) {
      const data: Customer = this.sellerForm.value;
      this.signUpService.userSignUp(data).subscribe(
        (response) => {
          if (response && response.data) {
            localStorage.setItem('seller', JSON.stringify(response.data));
            this.signUpService.setSellerLoggedIn(true);
            this.router.navigate(['seller-home']);
          }
          console.log('Result ', response);
        },
        (error) => {
          console.error('Sign-up error:', error);
  
        }
      );
    }
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.signUpService.setSellerLoggedIn(true);
      this.router.navigate(['seller-home']);
    }
  }

  login() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.signUpService.login(data).subscribe(
        (response) => {
          if (response && response.status === 200 && response.message === 'login successfully.') {
            localStorage.setItem('seller', JSON.stringify(response.data));
            this.signUpService.setSellerLoggedIn(true);
            this.router.navigate(['seller-home']);
          } else {
            console.log('Login failed');
          }
          console.log('Result ', response);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
    }
  }
}
