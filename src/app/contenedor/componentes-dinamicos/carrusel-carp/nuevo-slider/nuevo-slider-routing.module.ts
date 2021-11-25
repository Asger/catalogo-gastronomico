import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoSliderComponent } from './nuevo-slider.component';

const routes: Routes = [{ path: '', component: NuevoSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoSliderRoutingModule { }
