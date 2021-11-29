import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarrusel } from 'src/app/shared/models/carrusel.interface';
import { IProducto } from 'src/app/shared/models/producto.interface';
import { CarruselService } from '../../componentes-dinamicos/carrusel-carp/carrusel.service';
import { ProductoService } from '../../componentes-dinamicos/producto-carp/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  responsiveOptions: any;
  responsiveOptionsProducts: any;
  // Variable que contedra los sliders del carrusel
  carrusel$!: Observable<ICarrusel[]>;
  // Variable que contedra los productos
  productos!: IProducto[];

  constructor(
    private carruselSvc: CarruselService,
    private productoSvc: ProductoService,
    private viewportScroller: ViewportScroller
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
    this.responsiveOptionsProducts = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.carrusel$ = this.carruselSvc.getCarrusel();
    this.productoSvc.getTodosProductos().subscribe((res) => {
      this.productos = res.filter((el) => {
        return el.relevancia === true;
      });
    });
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}
