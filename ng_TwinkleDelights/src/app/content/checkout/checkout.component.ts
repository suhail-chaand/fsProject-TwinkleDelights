import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private api: ApiService, private fb: FormBuilder) { }

  cart: any
  cart_value: any
  coupon_codes: any
  price_offers: any

  ngOnInit(): void {
    this.getCart()
    this.priceForm.controls['coupon_code'].valueChanges.subscribe(value => {
      this.applyCoupon()
    });
  }

  async getCart() {
    //Synchronously fetch all products in the cart
    const cart = await lastValueFrom(this.api.getCart())

    this.cart = cart

    //Compute total cart value
    let cv = 0
    for (let product of cart) {
      cv += product.price
    }
    this.cart_value = cv

    //Set total savings and final price fields for default 10% discount
    let ts = cv * 0.1
    this.total_savings?.patchValue(ts)
    this.final_price?.patchValue(cv - ts)

    //Get all the coupons available for the products in the cart
    let cc = []
    for (let product of cart) {
      for (let offer of product.offers) {
        cc.push(offer.coupon_code)
      }
    }
    this.coupon_codes = [...new Set(cc)]

    //Get price and its associated offers for a particular product
    this.price_offers = cart.map(({ price, offers }) => { return { 'price': price, 'offers': offers } })
  }

  priceForm = this.fb.group({
    coupon_code: ['Select coupon'],
    total_savings: [{ value: null, disabled: true }],
    final_price: [{ value: null, disabled: true }]
  })

  get coupon_code() { return this.priceForm.get('coupon_code') }
  get total_savings() { return this.priceForm.get('total_savings') }
  get final_price() { return this.priceForm.get('final_price') }

  applyCoupon() {
    let savings = 0
    for (let price_offer of this.price_offers) {
      let saving = 0

      for (let offer of price_offer.offers) {
        if (offer.coupon_code == this.coupon_code?.value) {
          saving = price_offer.price * (offer.discount_percentage / 100)
          break
        }
      }
      savings += saving + price_offer.price * 0.1
    }
    this.total_savings?.patchValue(savings)
    this.final_price?.patchValue(this.cart_value - savings)
  }

}