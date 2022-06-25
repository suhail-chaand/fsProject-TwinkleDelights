import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletsComponent } from './content/bracelets/bracelets.component';
import { CategoriesComponent } from './content/categories/categories.component';
import { EarringsComponent } from './content/earrings/earrings.component';
import { NecklacesComponent } from './content/necklaces/necklaces.component';
import { RingsComponent } from './content/rings/rings.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },

  { path: 'earrings', component: EarringsComponent },
  { path: 'necklaces', component: NecklacesComponent },
  { path: 'rings', component: RingsComponent },
  { path: 'bracelets', component: BraceletsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
