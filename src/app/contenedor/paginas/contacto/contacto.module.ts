import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    HeroSeccionModule
  ]
})
export class ContactoModule { }
