import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorGlobalComponent } from './contenedor/paginas/contenedor-global/contenedor-global.component';

const routes: Routes = [
  {
    path: '', component: ContenedorGlobalComponent,
    children:[
      { path: 'inicio', loadChildren: () => import('./contenedor/paginas/inicio/inicio.module').then((m) => m.InicioModule) },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
