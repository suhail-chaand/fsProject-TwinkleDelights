import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/assets/product_interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private api: ApiService) {

  }

  @Input() wishlistClicked: any

  wishlist: any

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWishlist()
  }

  async getWishlist() {
    //Synchronously fetch all products in the wishlist
    const wishlist = await lastValueFrom(this.api.getWishlist())

    this.wishlist = wishlist
  }

}