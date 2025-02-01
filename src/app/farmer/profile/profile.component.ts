import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  // Profile form model
  profileForm = {
    farmerName: '',
    farmName: '',
    location: '',
    email: '',
    phone: '',
    farmSize: 0,
    farmImage: ''
  };

  // Handle form submission
  submitProfileForm() {
    console.log('Farmer Profile Submitted:', this.profileForm);
    // You can handle the form submission here (send data to a server or local storage)
    alert('Farmer profile saved successfully!');
    // Clear the form after submission
    this.profileForm = {
      farmerName: '',
      farmName: '',
      location: '',
      email: '',
      phone: '',
      farmSize: 0,
      farmImage: ''
    };
  }

  // Handle image selection
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        this.profileForm.farmImage = imageUrl; // Set the selected image to form model
      };
      reader.readAsDataURL(file);
    }
  }
}
