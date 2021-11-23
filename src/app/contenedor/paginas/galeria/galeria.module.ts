import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { PrimengModule } from 'src/app/primeng-module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    HeroSeccionModule,
    PrimengModule,
    FooterModule
  ]
})
export class GaleriaModule { }
