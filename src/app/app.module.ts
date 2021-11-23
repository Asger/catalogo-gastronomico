import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorGlobalComponent } from './contenedor/paginas/contenedor-global/contenedor-global.component';
import { PrimengModule } from './primeng-module';
import { FirebaseModule } from './firebase-module';

@NgModule({
  declarations: [AppComponent, ContenedorGlobalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    FirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
