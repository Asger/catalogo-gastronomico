import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { IProducto } from 'src/app/shared/models/producto.interface';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.component.html',
  styleUrls: ['./producto-detallado.component.scss'],
})
export class ProductoDetalladoComponent implements OnInit {
  seccion!: string | null;
  producto$!: Observable<IProducto | undefined>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productoSvc: ProductoService
  ) {}

  ngOnInit(): void {
    // Obtengo el parametro de las rutas 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.seccion = params.get('id');
      if (this.seccion) {
        this.producto$ = this.productoSvc.getUnProducto(this.seccion);
      }
    });
  }
}
