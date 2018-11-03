import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = true;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  performFilter(value: string): Product[] {
    value = value.toLowerCase().trim();
    return this.products.filter(product =>
      product.productName.toLowerCase().includes(value)
    );
  }
  constructor(private productService: ProductService) {}
  filterProducts: Product[] = [];
  products: Product[] = [];
  toggleImage() {
    this.showImage = !this.showImage;
  }
  ngOnInit() {
    this.products = [];
    this.productService.getProducts().subscribe(result => {
      this.products = result;
      this.listFilter = '';
    });

  }
  onRatingClicked(message: string) {
    this.pageTitle = message;
  }
}
