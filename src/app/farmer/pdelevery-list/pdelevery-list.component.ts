import { Component } from '@angular/core';

@Component({
  selector: 'app-pdelevery-list',
  templateUrl: './pdelevery-list.component.html',
  styleUrls: ['./pdelevery-list.component.scss']
})
export class PdeleveryListComponent {

  // Delivery form model
  deliveryForm = {
    productName: '',
    deliveryAddress: '',
    quantity: 0,
    deliveryDate: '',
    contactNumber: ''
  };

  // Handle form submission
  submitDeliveryForm() {
    console.log('Delivery Form Submitted:', this.deliveryForm);
    // You can handle the form submission here (send data to a server or local storage)
    alert('Delivery request submitted successfully!');
    // Clear the form after submission
    this.deliveryForm = {
      productName: '',
      deliveryAddress: '',
      quantity: 0,
      deliveryDate: '',
      contactNumber: ''
    };
  }
}
