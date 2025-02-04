import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';  // Added Validators
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-p-create',
  templateUrl: './p-create.component.html',
  styleUrls: ['./p-create.component.scss']
})
export class PCreateComponent {

  constructor(private farmerService: FarmerService, private router: Router) {}

  productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, ]),
      categoryId: new FormControl('', Validators.required),  // Updated to categoryId to match backend entity
      quantity: new FormControl('', [Validators.required, ]),
      description: new FormControl('', Validators.required),  // Updated to description to match backend entity
  });

  save() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.farmerService.add(productData).subscribe(
        (res: any) => {
          console.log('Product created successfully:', res);
          this.router.navigateByUrl('/farmer/product-list');
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
