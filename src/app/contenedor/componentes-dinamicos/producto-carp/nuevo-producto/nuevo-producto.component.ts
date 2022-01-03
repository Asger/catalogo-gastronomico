import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../../../../shared/models/producto.interface';
import { ProductoService } from '../producto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss'],
  providers: [MessageService],
})
export class NuevoProductoComponent implements OnInit {
  public previsualizacion: string | undefined;
  private imagen: any;
  private imagenOriginal: any;
  public fecha!: Date;
  //public categoria!: string;
  producto: IProducto = {
    nombre: '',
    contenido: '',
    precio: 0,
    categoria: '',
    relevancia: undefined,
  };

  editar: boolean = false;

  constructor(
    private productoSvc: ProductoService,
    private sanitizer: DomSanitizer,
    private activetedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  // Creo el formulario, junto a sus respectivas propiedades y validaciones.
  public productoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    relevancia: new FormControl('', Validators.required),
    horaCreacion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // Toma los parametros de las rutas
    const params = this.activetedRoute.snapshot.params;
    if (params.id) {
      /* 
        Si existe un id, quiere decir que va a editar un producto,
        por ello, traigo los datos actuales de ese producto y los asigno al objeto producto.
      */
      this.productoSvc.getUnProducto(params.id).subscribe(
        (res) => {
          if (res != undefined) {
            this.previsualizacion = res.imagen;
            this.producto.nombre = res.nombre;
            this.producto.contenido = res.contenido;
            this.producto.precio = res.precio;
            this.producto.categoria = res.categoria;
            this.producto.relevancia = res.relevancia;
            if (res.horaCreacion) {
              this.fecha = res.horaCreacion?.toDate();
            }

            this.producto.id = params.id;
            this.imagen = res.imagen;
            this.imagenOriginal = res.imagen;

            this.editar = true;
          }
        },
        (err) => console.error(err)
      );
    }
  }

  // Este método es el encargado de llamar al servicio o intermediario para poder crear un producto.
  agregarProducto(data: IProducto) {
    this.productoSvc.preCrearYActualizarProducto(data, this.imagen);
    this.previsualizacion = undefined;
    this.messageService.add({
      severity: 'success',
      summary: 'Nuevo producto creado',
      detail: 'El producto fue creado con éxito',
      life: 3500,
    });
    this.productoForm.reset();
    this.producto.nombre = '';
    this.producto.contenido = '';
    this.producto.precio = 0;
    this.producto.categoria = '';
  }

  // Este método toma la imagen seleccionada del input imagen.
  tomarImagen(event: any): void {
    this.imagen = event.target.files[0];
    this.extraerBase64(this.imagen).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    });
  }

  // Este método es para sacar la base64 de la imagen, para poderla visualizar.
  extraerBase64 = async ($event: any) =>
    new Promise((resolve, reject) => {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result,
        });
      };
      reader.onerror = (error) => {
        resolve({
          base: null,
        });
      };
    });

  /* 
    Este método actualizara el producto deseado, primero comprobando si el administrador cambio la imagen o no,
    para subir la imagen en caso de que haya seleccionado otra. 
  */
  actualizarProducto() {
    if (this.imagen === this.imagenOriginal) {
      this.producto.imagen = this.imagenOriginal;
      //llamamos al metodo
      this.productoSvc.editarProductoById(this.producto);
      this.messageService.add({
        severity: 'success',
        summary: 'Producto actualizado',
        detail: 'El producto fue actualizado con éxito',
        life: 3500,
      });
    } else {
      this.productoSvc.editarProductoById(this.producto, this.imagen);
      this.messageService.add({
        severity: 'success',
        summary: 'Producto actualizado',
        detail: 'El producto fue actualizado con éxito',
        life: 3500,
      });
    }
  }
}
