import { Component, OnInit } from '@angular/core';
import { FarmerProductOfferService } from '../services/farmer-product-offer.service';


@Component({
  selector: 'app-farmeroffer',
  templateUrl: './farmeroffer.component.html',
  styleUrls: ['./farmeroffer.component.scss']
})
export class FarmerofferComponent implements OnInit {

  offers: any[] = []; // অফারের তালিকা
  newOffer: any = {  // নতুন অফারের ডেটা সংরক্ষণের জন্য অবজেক্ট
    farmerId: 1,
    productName: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    imageUrl: '',
    category: '',
    sellerName: '',
    productCondition: '',
    deliveryInfo: '',
    discount: 0,
    validUntil: '',
    features: ''
  };

  constructor(private offerService: FarmerProductOfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  // সব অফার দেখুন
  getOffers(): void {
    this.offerService.getAllOffers().subscribe((data: any[]) => {
      this.offers = data;
    });
  }

  // নতুন অফার তৈরি করুন
  createOffer(): void {
    this.offerService.createOffer(this.newOffer).subscribe((response: any) => {
      console.log('নতুন অফার তৈরি হয়েছে:', response);
      this.getOffers(); // অফারগুলো পুনরায় লোড করুন
      this.clearForm();  // ফর্ম ক্লিয়ার করুন
    });
  }

  // ফর্ম ক্লিয়ার করা
  clearForm(): void {
    this.newOffer = {
      farmerId: 1,
      productName: '',
      description: '',
      price: 0,
      stockQuantity: 0,
      imageUrl: '',
      category: '',
      sellerName: '',
      productCondition: '',
      deliveryInfo: '',
      discount: 0,
      validUntil: '',
      features: ''
    };
  }
}
