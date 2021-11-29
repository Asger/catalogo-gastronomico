import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'nuevo-blog', loadChildren: () => import('../componentes-dinamicos/blog-carp/nuevo-blog/nuevo-blog.module').then(m => m.NuevoBlogModule), canActivate:[AuthGuard]},
  { path: 'editar-blog/:id', loadChildren: () => import('../componentes-dinamicos/blog-carp/nuevo-blog/nuevo-blog.module').then(m => m.NuevoBlogModule), canActivate:[AuthGuard]},
  { path: 'nuevo-slider', loadChildren: () => import('../componentes-dinamicos/carrusel-carp/nuevo-slider/nuevo-slider.module').then(m => m.NuevoSliderModule), canActivate:[AuthGuard]},
  { path: 'editar-slider/:id', loadChildren: () => import('../componentes-dinamicos/carrusel-carp/nuevo-slider/nuevo-slider.module').then(m => m.NuevoSliderModule), canActivate:[AuthGuard]},
  { path: 'nueva-foto', loadChildren: () => import('../componentes-dinamicos/foto-carp/nueva-foto/nueva-foto.module').then(m => m.NuevaFotoModule), canActivate:[AuthGuard]},
  { path: 'editar-foto/:id', loadChildren: () => import('../componentes-dinamicos/foto-carp/nueva-foto/nueva-foto.module').then(m => m.NuevaFotoModule), canActivate:[AuthGuard]},
  { path: 'nuevo-producto', loadChildren: () => import('../componentes-dinamicos/producto-carp/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule), canActivate:[AuthGuard]},
  { path: 'editar-producto/:id', loadChildren: () => import('../componentes-dinamicos/producto-carp/nuevo-producto/nuevo-producto.module').then(m => m.NuevoProductoModule), canActivate:[AuthGuard]},
  { path: ':seccion', component: AdminComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
