import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaFotoRoutingModule } from './nueva-foto-routing.module';
import { NuevaFotoComponent } from './nueva-foto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng-module';

@NgModule({
  declarations: [NuevaFotoComponent],
  imports: [
    CommonModule,
    NuevaFotoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
})
export class NuevaFotoModule {}
