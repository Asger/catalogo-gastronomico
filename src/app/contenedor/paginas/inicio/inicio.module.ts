import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { PrimengModule } from 'src/app/primeng-module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ConvertidorHtmlModule } from 'src/app/shared/pipes/convertidor-html/convertidor-html.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    PrimengModule,
    FooterModule,
    ConvertidorHtmlModule,
  ],
})
export class InicioModule {}
