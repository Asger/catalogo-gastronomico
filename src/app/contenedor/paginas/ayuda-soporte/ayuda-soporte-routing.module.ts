import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaSoporteComponent } from './ayuda-soporte.component';

const routes: Routes = [{ path: '', component: AyudaSoporteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyudaSoporteRoutingModule { }
