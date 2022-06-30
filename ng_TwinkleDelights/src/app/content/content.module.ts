import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { EarringsComponent } from './earrings/earrings.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletsComponent } from './bracelets/bracelets.component';
import { ProductCardHorizontalComponent } from './product-card-horizontal/product-card-horizontal.component';
import { ServicesModule } from '../services/services.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductCardCheckoutComponent } from './product-card-checkout/product-card-checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProductCardComponent,
    EarringsComponent,
    NecklacesComponent,
    RingsComponent,
    BraceletsComponent,
    ProductCardHorizontalComponent,
    CheckoutComponent,
    ProductCardCheckoutComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ServicesModule,
    ReactiveFormsModule,
  ],
  exports: [
    CategoriesComponent,
    EarringsComponent,
    NecklacesComponent,
    RingsComponent,
    BraceletsComponent,
    ProductCardComponent,
    CheckoutComponent,
    ProductDetailsComponent,
  ]
})
export class ContentModule { }
