import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  template: `
    <p>
      products works!
    </p>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {
  @Input() public products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
