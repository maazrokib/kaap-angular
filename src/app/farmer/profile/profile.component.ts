import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmerProfileService } from '../services/farmer-profile-service.service';
import { FarmerProfile } from 'src/app/model/profile.ts';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  farmer: FarmerProfile = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    location: '',
    joined: '',
    productsItems: '',
    profilePicture: '',
    experience: '',
    date: '',
    farmSize: 0
  };
  isEditing = false;

  constructor(private farmerProfileService: FarmerProfileService) {}

  ngOnInit(): void {
    this.getFarmerProfile(1);  // Example: Fetch farmer profile by ID 1
  }

  // Fetch a Farmer Profile using the service (Observable)
  getFarmerProfile(id: number): void {
    this.farmerProfileService.getFarmerById(id).subscribe(
      (data) => {
        this.farmer = data;  // Update the farmer profile with the fetched data
      },
      (error) => {
        console.error('Error fetching farmer data:', error);
      }
    );
  }

  // Save Farmer Profile (Create or Update using Observable)
  saveFarmer(): void {
    if (this.farmer.id === 0) {
      // If id is 0, create a new farmer
      this.farmerProfileService.createFarmer(this.farmer).subscribe(
        (data) => {
          console.log('Farmer profile created:', data);
          this.farmer = data;
          this.isEditing = false;  // Switch to view mode after save
        },
        (error) => {
          console.error('Error creating farmer profile:', error);
        }
      );
    } else {
      // If id is not 0, update the existing farmer
      this.farmerProfileService.updateFarmer(this.farmer.id, this.farmer).subscribe(
        (data) => {
          console.log('Farmer profile updated:', data);
          this.farmer = data;
          this.isEditing = false;  // Switch to view mode after update
        },
        (error) => {
          console.error('Error updating farmer profile:', error);
        }
      );
    }
  }

  // Enable Editing Mode
  editFarmer(): void {
    this.isEditing = true;
  }

  // Handle Profile Image Upload
  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.farmer.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
