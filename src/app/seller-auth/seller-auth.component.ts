import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/models/customer'; 
import { SignUpServiceService } from '../services/sign-up-service.service'; // Adjust the path if necessary

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  // FormGroupDirective.form: FormGroup<any>
  sellerForm!: FormGroup;
  loginForm!: FormGroup;
  showLogin:boolean=true

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpServiceService // Ensure the service is correctly injected
  ) {}

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      FirstName: ['', Validators.required],
      AddressOne: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm = this.fb.group({
      Mobile: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  
  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      const formData: Customer = this.sellerForm.value;
      this.signUpService.userSignUp(formData).subscribe(
        (response) => {
          console.log('Form Submitted!', response);
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Form Data', loginData);
      this.signUpService.login(loginData).subscribe(
        (response) => {
          console.log('Login Successful!', response);
        },
        (error) => {
          console.error('Error during login:', error);
        }
      );
      
    }
  }
}
