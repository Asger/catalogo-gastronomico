import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoDetalladoRoutingModule } from './producto-detallado-routing.module';
import { ProductoDetalladoComponent } from './producto-detallado.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { PrimengModule } from 'src/app/primeng-module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [ProductoDetalladoComponent],
  imports: [
    CommonModule,
    ProductoDetalladoRoutingModule,
    FooterModule,
    PrimengModule,
    ConvertidorHtmlModule,
  ],
})
export class ProductoDetalladoModule {}
