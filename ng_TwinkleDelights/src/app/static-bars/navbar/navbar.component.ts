import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private api: ApiService) { }

  coupons: any

  ngOnInit(): void {
    this.api.getCoupons().subscribe(response => this.coupons = response)
  }

  cartClicked: any
  wishlistClicked: any

  //To trigger ngOnChanges() of cart component
  displayCart() {
    if (this.cartClicked) { this.cartClicked = false }
    else { this.cartClicked = true }
  }

  displayWishlist() {
    if (this.wishlistClicked) { this.wishlistClicked = false }
    else { this.wishlistClicked = true }
  }

}