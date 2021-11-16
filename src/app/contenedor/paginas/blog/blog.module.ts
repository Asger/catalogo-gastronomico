import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { HeroSeccionModule } from 'src/app/shared/components/hero-seccion/hero-seccion.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HeroSeccionModule
  ]
})
export class BlogModule { }
