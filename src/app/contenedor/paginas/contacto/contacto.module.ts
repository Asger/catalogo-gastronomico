import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { PrimengModule } from 'src/app/primeng-module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    HeroSeccionModule,
    PrimengModule,
    FooterModule
  ]
})
export class ContactoModule { }
