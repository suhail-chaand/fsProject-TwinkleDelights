import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletsComponent } from './content/bracelets/bracelets.component';
import { CategoriesComponent } from './content/categories/categories.component';
import { CheckoutComponent } from './content/checkout/checkout.component';
import { EarringsComponent } from './content/earrings/earrings.component';
import { NecklacesComponent } from './content/necklaces/necklaces.component';
import { ProductDetailsComponent } from './content/product-details/product-details.component';
import { RingsComponent } from './content/rings/rings.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },

  { path: 'earrings', component: EarringsComponent },
  { path: 'necklaces', component: NecklacesComponent },
  { path: 'rings', component: RingsComponent },
  { path: 'bracelets', component: BraceletsComponent },

  { path: 'details/:id', component: ProductDetailsComponent },

  { path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
