import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoBlogRoutingModule } from './nuevo-blog-routing.module';
import { NuevoBlogComponent } from './nuevo-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng-module';

@NgModule({
  declarations: [NuevoBlogComponent],
  imports: [
    CommonModule,
    NuevoBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
})
export class NuevoBlogModule {}
