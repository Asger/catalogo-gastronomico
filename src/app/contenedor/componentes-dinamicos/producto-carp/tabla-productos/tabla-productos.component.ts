import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { IProducto } from 'src/app/shared/models/producto.interface';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TablaProductosComponent implements OnInit {
  seccion!: string | null;
  productDialog!: boolean;
  cargado!: boolean;
  productos!: IProducto[];

  constructor(
    private productoSvc: ProductoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.seccion = params.get('seccion');

      switch (this.seccion) {
        case 'tabla-platillos':
          this.productoSvc.getTodosProductos().subscribe((res) => {
            this.productos = res.filter((el) => {
              return (
                el.categoria === 'Platillo principal' ||
                el.categoria === 'Platillo vegetariano'
              );
            });
            this.cargado = true;
          });
          break;
        case 'tabla-bebidas':
          this.productoSvc.getTodosProductos().subscribe((res) => {
            this.productos = res.filter((el) => {
              return (
                el.categoria === 'Bebida alcohólica' ||
                el.categoria === 'Bebida sin alcohol'
              );
            });
            this.cargado = true;
          });
          break;
        case 'tabla-postres':
          this.productoSvc.getTodosProductos().subscribe((res) => {
            this.productos = res.filter((el) => {
              return el.categoria === 'Postre';
            });
            this.cargado = true;
          });
          break;

        default:
          break;
      }
    });
  }

  deleteProducto(producto: IProducto) {
    this.confirmationService.confirm({
      message:
        'Estas seguro que quieres eliminar el producto llamado: ' +
        producto.nombre +
        '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle text-pink-500',
      accept: () => {
        this.productoSvc
          .eliminarProductoById(producto)
          .then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Eliminado',
              detail: 'El producto fue eliminado con éxito',
              life: 3500,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });
  }
}
