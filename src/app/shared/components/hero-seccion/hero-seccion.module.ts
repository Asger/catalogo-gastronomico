import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSeccionComponent } from './hero-seccion.component';

@NgModule({
  declarations: [HeroSeccionComponent],
  imports: [CommonModule],
  exports: [HeroSeccionComponent]
})
export class HeroSeccionModule {}
