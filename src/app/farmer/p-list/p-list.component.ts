import { FarmerService } from './../services/farmer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.scss'],
})
export class PListComponent implements OnInit {
  product!: any[];

  constructor(private FarmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {
    this.FarmerService.getAll().subscribe((res: any) => {
      this.product = res;
    });
  }

  delete(id: any) {
    this.FarmerService.delete(id).subscribe((res: any) => {
      this.ngOnInit();
    });
  }
}
