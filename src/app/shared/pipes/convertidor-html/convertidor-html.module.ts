import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertidorHtmlPipe } from './convertidor-html.pipe';

@NgModule({
  declarations: [ConvertidorHtmlPipe],
  imports: [CommonModule],
  exports: [ConvertidorHtmlPipe],
})
export class ConvertidorHtmlModule {}
