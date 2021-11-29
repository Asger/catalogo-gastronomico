import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorGlobalComponent } from './contenedor/paginas/contenedor-global/contenedor-global.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorGlobalComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./contenedor/paginas/inicio/inicio.module').then(
            (m) => m.InicioModule
          ),
      },
      {
        path: 'carta-menu',
        loadChildren: () =>
          import('./contenedor/paginas/carta-menu/carta-menu.module').then(
            (m) => m.CartaMenuModule
          ),
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('./contenedor/paginas/contacto/contacto.module').then(
            (m) => m.ContactoModule
          ),
      },
      {
        path: 'nosotros',
        loadChildren: () =>
          import('./contenedor/paginas/nosotros/nosotros.module').then(
            (m) => m.NosotrosModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./contenedor/paginas/blog/blog.module').then(
            (m) => m.BlogModule
          ),
      },
      {
        path: 'galeria',
        loadChildren: () =>
          import('./contenedor/paginas/galeria/galeria.module').then(
            (m) => m.GaleriaModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./contenedor/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./contenedor/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'producto-detallado/:id',
        loadChildren: () =>
          import(
            './contenedor/componentes-dinamicos/producto-carp/producto-detallado/producto-detallado.module'
          ).then((m) => m.ProductoDetalladoModule),
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
