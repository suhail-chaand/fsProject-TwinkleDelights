import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  product: any

  in_wishlist: any
  in_cart: any

  ngOnInit(): void {
    const product_id = this.route.snapshot.params['id']

    this.api.getProduct(product_id).subscribe(response => {
      this.product = response
      this.in_wishlist = this.product.in_wishlist
      this.in_cart = this.product.in_cart
    })

  }

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