import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../services/farmer.service'; // Make sure the correct service is imported
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.scss'],
})
export class PListComponent implements OnInit {

  productList!: any[]; // Define product list type
product: any;

  constructor(private farmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the list of products from the backend
    this.farmerService.getAll().subscribe(
      (res: any) => {
        this.productList = res;
        console.log('Product List:', this.productList);
      },
      (error) => {
        console.error('Error fetching product list:', error);
      }
    );
  }

  delete(id: any): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.farmerService.delete(id).subscribe(
        (res: any) => {
          console.log('Product deleted successfully:', res);
          this.ngOnInit(); // Refresh the product list after deletion
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
