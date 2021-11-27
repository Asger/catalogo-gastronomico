import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalladoComponent } from './producto-detallado.component';

const routes: Routes = [{ path: '', component: ProductoDetalladoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoDetalladoRoutingModule { }
