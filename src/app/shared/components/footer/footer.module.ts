import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { PrimengModule } from 'src/app/primeng-module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, PrimengModule],
  exports: [FooterComponent],
})
export class FooterModule {}
