import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorGlobalComponent } from './contenedor/paginas/contenedor-global/contenedor-global.component';

const routes: Routes = [
  {
    path: '', component: ContenedorGlobalComponent,
    children:[
      { path: 'inicio', loadChildren: () => import('./contenedor/paginas/inicio/inicio.module').then((m) => m.InicioModule) },
      { path: 'carta-menu', loadChildren: () => import('./contenedor/paginas/carta-menu/carta-menu.module').then(m => m.CartaMenuModule) },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
