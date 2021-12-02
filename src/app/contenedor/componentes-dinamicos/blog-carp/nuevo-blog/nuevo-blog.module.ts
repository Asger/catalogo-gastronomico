import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoBlogRoutingModule } from './nuevo-blog-routing.module';
import { NuevoBlogComponent } from './nuevo-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng-module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [NuevoBlogComponent],
  imports: [
    CommonModule,
    NuevoBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    ConvertidorHtmlModule,
  ],
})
export class NuevoBlogModule {}
