import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaFotoComponent } from './nueva-foto.component';

const routes: Routes = [{ path: '', component: NuevaFotoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaFotoRoutingModule { }
