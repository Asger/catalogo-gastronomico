import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { PrimengModule } from 'src/app/primeng-module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    HeroSeccionModule,
    PrimengModule,
    FooterModule
  ],
})
export class NosotrosModule {}
