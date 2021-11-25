import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaProductosComponent } from './tabla-productos.component';
import { PrimengModule } from 'src/app/primeng-module';
import { AdminRoutingModule } from '../../../admin/admin-routing.module';

@NgModule({
  declarations: [TablaProductosComponent],
  imports: [CommonModule, AdminRoutingModule, PrimengModule],
  exports: [TablaProductosComponent],
})
export class TablaProductosModule {}
