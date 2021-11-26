import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from '../../../../shared/models/blog.interface';
import { BlogService } from '../blog.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nuevo-blog',
  templateUrl: './nuevo-blog.component.html',
  styleUrls: ['./nuevo-blog.component.scss'],
  providers: [MessageService],
})
export class NuevoBlogComponent implements OnInit {
  public previsualizacion: string | undefined;
  private imagen: any;
  private imagenOriginal: any;
  public fecha!: Date | undefined;
  blog: IBlog = {
    titulo: '',
    contenido: '',
    categoria: '',
  };

  editar: boolean = false;
  constructor(
    private blogSvc: BlogService,
    private sanitizer: DomSanitizer,
    private activetedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  // Creo el formulario, junto a sus respectivas propiedades y validaciones.
  public blogForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    horaCreacion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // Toma los parametros de las rutas.
    const params = this.activetedRoute.snapshot.params;
    if (params.id) {
      /* 
         Si existe un id, quiere decir que va a editar un blog,
         por ello, traigo los datos actuales de ese blog y los asigno al objeto blog.
      */
      this.blogSvc.getUnBlog(params.id).subscribe(
        (res) => {
          if (res != undefined) {
            this.previsualizacion = res.imagen;
            this.blog.titulo = res.titulo;
            this.blog.contenido = res.contenido;
            this.blog.categoria = res.categoria;
            this.fecha = res.horaCreacion?.toDate();

            this.blog.id = params.id;
            this.imagen = res.imagen;
            this.imagenOriginal = res.imagen;

            this.editar = true;
          }
        },
        (err) => console.error(err)
      );
    }
  }

  // Este método es el encargado de llamar al servicio o intermediario para poder crear un blog.
  agregarBlog(data: IBlog) {
    this.blogSvc.preCrearYActualizarBlog(data, this.imagen);
    this.previsualizacion = undefined;
    this.messageService.add({
      severity: 'success',
      summary: 'Nuevo blog creado',
      detail: 'El blog fue creado con éxito',
      life: 3500,
    });
    this.blogForm.reset();
    this.blog.titulo = '';
    this.blog.contenido = '';
    this.blog.categoria = '';
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
    Este método actualizara el blog deseado, primero comprobando si el administrador cambio la imagen o no,
    para subir la imagen en caso de que haya seleccionado otra.
  */
  actualizarBlog() {
    if (this.imagen === this.imagenOriginal) {
      this.blog.imagen = this.imagenOriginal;
      //llamamos al metodo
      this.blogSvc.editarBlogById(this.blog);
      this.messageService.add({
        severity: 'success',
        summary: 'Blog actualizado',
        detail: 'El blog fue actualizado con éxito',
        life: 3500,
      });
    } else {
      this.blogSvc.editarBlogById(this.blog, this.imagen);
      this.messageService.add({
        severity: 'success',
        summary: 'Blog actualizado',
        detail: 'El blog fue actualizado con éxito',
        life: 3500,
      });
    }
  }
}
