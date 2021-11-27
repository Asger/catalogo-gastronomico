import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';
import { PrimengModule } from 'src/app/primeng-module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HeroSeccionModule,
    PrimengModule,
    FooterModule,
    ConvertidorHtmlModule,
  ],
})
export class BlogModule {}
