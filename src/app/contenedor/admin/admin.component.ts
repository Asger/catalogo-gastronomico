import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  seccion!: string | null;
  tablaProductos = false;
  tablaFotos = false;
  tablaSliders = false;
  tablaBlogs = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.seccion = params.get('seccion');

      switch (this.seccion) {
        case 'tabla-inicio':
          this.tablaSliders = true;
          this.tablaProductos = false;
          this.tablaFotos = false;
          this.tablaBlogs = false;
          break;
        case 'tabla-platillos':
          this.tablaProductos = true;
          this.tablaFotos = false;
          this.tablaSliders = false;
          this.tablaBlogs = false;
          break;
        case 'tabla-bebidas':
          this.tablaProductos = true;
          this.tablaFotos = false;
          this.tablaSliders = false;
          this.tablaBlogs = false;
          break;
        case 'tabla-postres':
          this.tablaProductos = true;
          this.tablaFotos = false;
          this.tablaSliders = false;
          this.tablaBlogs = false;
          break;
        case 'tabla-blog':
          this.tablaBlogs = true;
          this.tablaProductos = false;
          this.tablaFotos = false;
          this.tablaSliders = false;
          break;
        case 'tabla-fotos':
          this.tablaFotos = true;
          this.tablaProductos = false;
          this.tablaSliders = false;
          this.tablaBlogs = false;
          break;
        default:
          break;
      }
    });
  }
}
