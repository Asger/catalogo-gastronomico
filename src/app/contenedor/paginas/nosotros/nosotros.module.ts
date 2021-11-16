import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, NosotrosRoutingModule, HeroSeccionModule],
})
export class NosotrosModule {}
