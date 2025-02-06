import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-p-create',
  templateUrl: './p-create.component.html',
  styleUrls: ['./p-create.component.scss']
})
export class PCreateComponent {
  selectedImage: File | null = null;

  constructor(private farmerService: FarmerService, private router: Router) {}

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    categoryId: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    productCondition: new FormControl('NEW', Validators.required), // Default value as NEW
    description: new FormControl('', Validators.required),
  });

  // Handle image selection
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  // Save product along with the image
  save() {
    if (this.productForm.valid && this.selectedImage) {
      const formData = new FormData();
      formData.append('product', JSON.stringify(this.productForm.value)); // Append product data
      formData.append('image', this.selectedImage); // Append image file

      this.farmerService.add(formData).subscribe(
        (res: any) => {
          console.log('Product created successfully:', res);
          this.router.navigateByUrl('/farmer/product-list');
        },
        error => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      console.log('Form is invalid or image not selected');
    }
  }
}
