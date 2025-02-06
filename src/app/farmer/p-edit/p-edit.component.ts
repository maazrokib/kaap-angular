import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.scss'],
})
export class PEditComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    productCondition: new FormControl('NEW', Validators.required),  // Default value as NEW
    description: new FormControl('', Validators.required),
  });

  id!: any;
  product!: any;

  constructor(
    private farmerService: FarmerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.farmerService.getById(this.id).subscribe(
      (product: any) => {
        this.product = product;
        this.productForm.setValue(this.product);  // Populate form with product data
      },
      (error) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  update() {
    if (this.productForm.valid) {
      this.farmerService.update(this.productForm.value).subscribe(
        (res: any) => {
          console.log('Product updated successfully:', res);
          this.router.navigateByUrl('/farmer/product-list');
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
