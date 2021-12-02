import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoSliderRoutingModule } from './nuevo-slider-routing.module';
import { NuevoSliderComponent } from './nuevo-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng-module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [NuevoSliderComponent],
  imports: [
    CommonModule,
    NuevoSliderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    ConvertidorHtmlModule
  ],
})
export class NuevoSliderModule {}
