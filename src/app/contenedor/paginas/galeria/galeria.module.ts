import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    HeroSeccionModule
  ]
})
export class GaleriaModule { }
