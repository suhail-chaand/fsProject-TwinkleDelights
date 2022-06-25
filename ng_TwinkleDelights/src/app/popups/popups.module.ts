import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { ContentModule } from '../content/content.module';
import { ProductCardSmallComponent } from './product-card-small/product-card-small.component';
import { ServicesModule } from '../services/services.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CouponsComponent,
    WishlistComponent,
    CartComponent,
    ProductCardSmallComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    ContentModule,
    ServicesModule,
    ReactiveFormsModule,
  ],
  exports: [
    CartComponent,
    CouponsComponent,
    WishlistComponent,
  ]
})
export class PopupsModule { }
