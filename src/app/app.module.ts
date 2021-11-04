import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng-module';
import { ContenedorGlobalComponent } from './contenedor/paginas/contenedor-global/contenedor-global.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ContenedorGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
