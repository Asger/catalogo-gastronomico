import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaMenuRoutingModule } from './carta-menu-routing.module';
import { CartaMenuComponent } from './carta-menu.component';
import { PrimengModule } from 'src/app/primeng-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartaMenuComponent
  ],
  imports: [
    CommonModule,
    CartaMenuRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class CartaMenuModule { }
