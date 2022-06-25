import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { StaticBarsRoutingModule } from './static-bars-routing.module';
import { RouterModule } from '@angular/router';
import { PopupsModule } from '../popups/popups.module';
import { CartComponent } from '../popups/cart/cart.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FootbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticBarsRoutingModule,
    PopupsModule,
  ],
  exports: [
    NavbarComponent,
    FootbarComponent,
  ],
  providers: [CartComponent]
})
export class StaticBarsModule { }
