import { Component } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
    role: 'buyer' // Default role is 'buyer'
  };

  // Handle form submission
  submitForm() {
    console.log('Form Submitted:', this.contactForm);
    alert('Thank you for reaching out! We will get back to you shortly.');

    // Reset the form
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: '',
      role: 'buyer'
    };
  }
}
