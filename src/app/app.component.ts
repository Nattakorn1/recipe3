import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  @ViewChild('productList')
  productList: ProductListComponent;

  ngOnInit(): void {
    this.productList.products = [
      {
        name: 'ส้มโอ',
        price: 111
      },
      {
        name: 'แตงโมง',
        price: 222
      },
      {
        name: 'มะพร้าวนำ้หอม',
        price: 333
      }
    ];
  }
}
