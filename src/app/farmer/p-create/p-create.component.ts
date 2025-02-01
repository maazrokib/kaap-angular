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
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      detail: new FormControl('', Validators.required),
    });
  

  save() {
    if (this.productForm.valid) {
      this.farmerService.add(this.productForm.value).subscribe(
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
