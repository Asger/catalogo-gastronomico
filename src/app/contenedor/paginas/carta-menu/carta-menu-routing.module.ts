import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaMenuComponent } from './carta-menu.component';

const routes: Routes = [
  { path: ':seccion', component: CartaMenuComponent },
  { path: '', component: CartaMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaMenuRoutingModule {}
