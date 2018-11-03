import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  pageTitle: string = 'Product Detail';
  productId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
  }
}
