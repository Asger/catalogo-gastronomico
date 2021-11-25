import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PrimengModule } from 'src/app/primeng-module';
//import { TablaProductosComponent } from '../../contenedor/componentes-dinamicos/producto-carp/tabla-productos/tabla-productos.component';
import { TablaBlogsComponent } from '../../contenedor/componentes-dinamicos/blog-carp/tabla-blogs/tabla-blogs.component';
import { TablaFotosComponent } from '../../contenedor/componentes-dinamicos/foto-carp/tabla-fotos/tabla-fotos.component';
import { TablaSlidersComponent } from '../../contenedor/componentes-dinamicos/carrusel-carp/tabla-sliders/tabla-sliders.component';
import { TablaProductosModule } from '../componentes-dinamicos/producto-carp/tabla-productos/tabla-productos.module';

@NgModule({
  declarations: [
    AdminComponent,
    //TablaProductosComponent,
    TablaBlogsComponent,
    TablaFotosComponent,
    TablaSlidersComponent,
    
  ],
  imports: [CommonModule, AdminRoutingModule, PrimengModule, TablaProductosModule],
})
export class AdminModule {}
