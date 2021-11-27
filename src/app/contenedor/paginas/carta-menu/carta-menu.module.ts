import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaMenuRoutingModule } from './carta-menu-routing.module';
import { CartaMenuComponent } from './carta-menu.component';
import { PrimengModule } from 'src/app/primeng-module';
import { FormsModule } from '@angular/forms';
import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [CartaMenuComponent],
  imports: [
    CommonModule,
    CartaMenuRoutingModule,
    PrimengModule,
    FormsModule,
    HeroSeccionModule,
    FooterModule,
    ConvertidorHtmlModule,
  ],
})
export class CartaMenuModule {}
