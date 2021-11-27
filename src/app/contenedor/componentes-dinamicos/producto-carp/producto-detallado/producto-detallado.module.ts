import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoDetalladoRoutingModule } from './producto-detallado-routing.module';
import { ProductoDetalladoComponent } from './producto-detallado.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { PrimengModule } from 'src/app/primeng-module';

@NgModule({
  declarations: [ProductoDetalladoComponent],
  imports: [
    CommonModule,
    ProductoDetalladoRoutingModule,
    FooterModule,
    PrimengModule,
  ],
})
export class ProductoDetalladoModule {}
