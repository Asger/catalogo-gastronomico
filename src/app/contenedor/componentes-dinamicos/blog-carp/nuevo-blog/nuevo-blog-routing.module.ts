import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoBlogComponent } from './nuevo-blog.component';

const routes: Routes = [{ path: '', component: NuevoBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoBlogRoutingModule { }
