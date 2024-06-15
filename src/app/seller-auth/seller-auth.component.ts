import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/models/customer';
import { SignUpServiceService } from '../services/sign-up-service.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  sellerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpServiceService  // Correct injection
  ) {}

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      FirstName: ['', Validators.required],
      AddressOne: ['', Validators.required],
      ZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      const formData: Customer = this.sellerForm.value;
      this.signUpService.userSignUp(formData).subscribe(
        (response) => {
          console.log('Form Submitted!', response);
          // Handle response as needed
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error as needed
        }
      );
    }
  }
}
