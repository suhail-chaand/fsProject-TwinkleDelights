import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-card-horizontal',
  templateUrl: './product-card-horizontal.component.html',
  styleUrls: ['./product-card-horizontal.component.scss']
})
export class ProductCardHorizontalComponent implements OnInit {

  constructor(private api: ApiService) { }

  @Input() product: any

  ngOnInit(): void {
    this.in_wishlist = this.product.in_wishlist
    this.in_cart = this.product.in_cart
  }

  in_wishlist: any
  in_cart: any

  wishlist(id: number) {
    if (this.in_wishlist) {
      this.in_wishlist = false
      this.api.updateWishlist(id, { in_wishlist: false }).subscribe()
    }
    else {
      this.in_wishlist = true
      this.api.updateWishlist(id, { in_wishlist: true }).subscribe()
    }
  }

  addToCart(id: number) {
    if (this.in_cart) {
      this.in_cart = false
      this.api.updateCart(id, { in_cart: false }).subscribe()
    }
    else {
      this.in_cart = true
      this.api.updateCart(id, { in_cart: true }).subscribe()
    }
  }

}
