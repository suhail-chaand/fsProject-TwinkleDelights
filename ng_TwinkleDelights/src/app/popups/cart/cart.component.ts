import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  constructor(private api: ApiService, private fb: FormBuilder) { }

  @Input() cartClicked: any

  cart: any

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCart()
  }

  async getCart() {
    //Synchronously fetch all products in the cart
    const cart = await lastValueFrom(this.api.getCart())

    this.cart = cart
  }

}