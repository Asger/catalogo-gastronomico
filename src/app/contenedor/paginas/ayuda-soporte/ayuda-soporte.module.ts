import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyudaSoporteRoutingModule } from './ayuda-soporte-routing.module';
import { AyudaSoporteComponent } from './ayuda-soporte.component';
import { PrimengModule } from 'src/app/primeng-module';
import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

@NgModule({
  declarations: [AyudaSoporteComponent],
  imports: [
    CommonModule,
    AyudaSoporteRoutingModule,
    PrimengModule,
    HeroSeccionModule,
    FooterModule,
  ],
})
export class AyudaSoporteModule {}
