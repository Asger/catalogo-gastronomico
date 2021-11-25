import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'nuevo-blog', loadChildren: () => import('../componentes-dinamicos/blog-carp/nuevo-blog/nuevo-blog.module').then(m => m.NuevoBlogModule) },
  { path: 'editar-blog/:id', loadChildren: () => import('../componentes-dinamicos/blog-carp/nuevo-blog/nuevo-blog.module').then(m => m.NuevoBlogModule) },
  { path: 'nuevo-slider', loadChildren: () => import('../componentes-dinamicos/carrusel-carp/nuevo-slider/nuevo-slider.module').then(m => m.NuevoSliderModule) },
  { path: 'editar-slider/:id', loadChildren: () => import('../componentes-dinamicos/carrusel-carp/nuevo-slider/nuevo-slider.module').then(m => m.NuevoSliderModule) },
  { path: 'nueva-foto', loadChildren: () => import('../componentes-dinamicos/foto-carp/nueva-foto/nueva-foto.module').then(m => m.NuevaFotoModule) },
  { path: 'editar-foto/:id', loadChildren: () => import('../componentes-dinamicos/foto-carp/nueva-foto/nueva-foto.module').then(m => m.NuevaFotoModule) },
  { path: 'nuevo-producto', loadChildren: () => import('../componentes-dinamicos/producto-carp/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule) },
  { path: 'editar-producto/:id', loadChildren: () => import('../componentes-dinamicos/producto-carp/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule) },
  { path: ':seccion', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
