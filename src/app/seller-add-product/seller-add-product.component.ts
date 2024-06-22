import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  sellerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.sellerForm = this.fb.group({
      name: ['', Validators.required],
      SubCategoryId: ['', Validators.required],
      CategoryId: ['1', Validators.required],
      videolink: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      DepartmentId: ['1', Validators.required],
      Tags: ['', Validators.required],
      landing_rate: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stock: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      newprice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      newstock: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      WarrantyInDays: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      dhc_category: ['', Validators.required],
      alternate_name: ['', Validators.required],
      CanSeeRole: ['10', [Validators.required, Validators.min(1), Validators.max(10)]],
      DiscountPercentage: ['', Validators.required],
      DisplayPriority: ['', Validators.required],
      IsActive: ['', Validators.required],
      max_quantity: ['', Validators.required],
      min_quantity: ['', Validators.required],
      ModelName: ['', Validators.required],
      product_code: ['', Validators.required],
      SellerDetail: ['', Validators.required],
      // delivery_charges: ['', Validators.required],
      // partnerId: ['', Validators.required],
      ImageWidth: ['600'],
      ImageHeight: ['auto'],
      image: [null]
    });
  }

  ngOnInit(): void { }

  addProduct(): void {
    if (this.sellerForm.valid) {
      const formData = new FormData();
      const formValues = this.sellerForm.getRawValue();

      Object.keys(formValues).forEach(key => {
        formData.append(key, formValues[key]);
      });

      formData.set('DisplayPriority', '1');

      formData.set('alternate_name', formValues['name']);
      formData.set('SellerDetail', "1"); // ye id change krlo apne hisab se localstorage se nikal k bhi daal sakte ho
      formData.set('ModelName', formValues['name']);
      formData.set('product_code', formValues['name']);

      this.productService.createProduct(formData).subscribe(
        (res: any) => {
          if (res && res['status'] === 200) {
            console.log('Product added successfully');
          } else {
            console.log('Failed to add product');
          }
        },
        (error: any) => {
          console.error('Error adding product:', error);
        }
      );
      console.log('Submitted Data:', formValues);
    } else {
      console.log('Form is invalid');
    }
  }

}
