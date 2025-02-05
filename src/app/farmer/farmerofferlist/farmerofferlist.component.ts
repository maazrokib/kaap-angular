import { Component, OnInit } from '@angular/core';
import { FarmerProductOfferService } from '../farmer-product-offer.service';


@Component({
  selector: 'app-farmerofferlist',
  templateUrl: './farmerofferlist.component.html',
  styleUrls: ['./farmerofferlist.component.scss']
})
export class FarmerofferlistComponent implements OnInit {

  offers: any[] = [];  // অফারের তালিকা

  constructor(private offerService: FarmerProductOfferService) { }

  ngOnInit(): void {
    // অফারগুলির তালিকা ফেচ করুন
    this.offerService.getAllOffers().subscribe((data) => {
      this.offers = data;  // ফেচ করা ডেটা offers অ্যারে তে সংরক্ষণ
    });
  }

}
