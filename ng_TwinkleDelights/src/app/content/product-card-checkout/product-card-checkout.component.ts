import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-product-card-checkout',
  templateUrl: './product-card-checkout.component.html',
  styleUrls: ['./product-card-checkout.component.scss']
})
export class ProductCardCheckoutComponent implements OnInit {

  constructor(private api: ApiService, private checkout: CheckoutComponent) { }

  ngOnInit(): void {
  }

  @Input() product: any

  addToCart(id: number) {
    this.api.updateCart(id, { in_cart: false }).subscribe()
    this.checkout.ngOnInit()
  }

}