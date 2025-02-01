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
  constructor(
    private farmerService: FarmerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  productForm = new FormGroup({
    id: new FormControl( Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
  });

  id!: any;
  Product!: any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('id-----------', this.id);

    this.farmerService.getById(this.id).subscribe((product: any) => {
      this.Product = product;
      this.productForm.setValue(this.Product);
    });
  }

  update() {
    if (this.productForm.valid) {
      this.farmerService
        .update(this.productForm.value)
        .subscribe((res: any) => {
          this.router.navigateByUrl('/farmer/product-list');
        });
    }
  }
}
