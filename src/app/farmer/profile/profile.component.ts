import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  isEditing = true;
  isNew = true;

  farmer = {
    name: '',
    email: '',
    phone: '',
    location: '',
    specialization: '',
    joinedDate: '',
    socialMedia: '',
    image: ''
  };

  saveFarmer() {
    this.isEditing = false;
    this.isNew = false;
  }

  editFarmer() {
    this.isEditing = true;
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.farmer.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

  