import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoProductoRoutingModule } from './nuevo-producto-routing.module';
import { NuevoProductoComponent } from './nuevo-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng-module';

@NgModule({
  declarations: [NuevoProductoComponent],
  imports: [
    CommonModule,
    NuevoProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
})
export class NuevoProductoModule {}
