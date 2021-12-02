import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IFoto } from '../../../../shared/models/foto.interface';
import { FotoService } from '../foto.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nueva-foto',
  templateUrl: './nueva-foto.component.html',
  styleUrls: ['./nueva-foto.component.scss'],
  providers: [MessageService],
})
export class NuevaFotoComponent implements OnInit {
  public previsualizacion: string | undefined;
  private imagen: any;
  private imagenOriginal: any;
  public fecha!: Date | undefined;
  public responsiveOptions: any;
  public fotos!: IFoto[];

  displayCustom!: boolean;
  activeIndex: number = 0;

  foto: IFoto = {
    titulo: '',
    categoria: '',
  };

  editar: boolean = false;
  constructor(
    private fotoSvc: FotoService,
    private sanitizer: DomSanitizer,
    private activetedRoute: ActivatedRoute,
    private messageService: MessageService
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
  }

  // Creo el formulario, junto a sus respectivas propiedades y validaciones.
  public fotoForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    horaCreacion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // Toma los parametros de las rutas.
    const params = this.activetedRoute.snapshot.params;
    if (params.id) {
      /* 
         Si existe un id, quiere decir que va a editar una foto,
         por ello, traigo los datos actuales de esa foto y los asigno al objeto foto.
      */
      this.fotoSvc.getUnaFoto(params.id).subscribe(
        (res) => {
          if (res != undefined) {
            this.previsualizacion = res.imagen;
            this.foto.titulo = res.titulo;
            this.foto.categoria = res.categoria;
            this.fecha = res.horaCreacion?.toDate();

            this.foto.id = params.id;
            this.imagen = res.imagen;
            this.imagenOriginal = res.imagen;

            this.editar = true;
          }
        },
        (err) => console.error(err)
      );
    }
    this.fotos = [this.foto];
  }

  // Este método es el encargado de llamar al servicio o intermediario para poder crear una foto.
  agregarFoto(data: IFoto) {
    this.fotoSvc.preCrearYActualizarFoto(data, this.imagen);
    this.previsualizacion = undefined;
    this.messageService.add({
      severity: 'success',
      summary: 'Nueva foto creada',
      detail: 'La foto fue creada con éxito',
      life: 3500,
    });
    this.fotoForm.reset();
    this.foto.titulo = '';
    this.foto.categoria = '';
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
    Este método actualizara la foto deseada, primero comprobando si el administrador cambio la imagen o no,
    para subir la imagen en caso de que haya seleccionado otra.
  */
  actualizarFoto() {
    if (this.imagen === this.imagenOriginal) {
      this.foto.imagen = this.imagenOriginal;
      //llamamos al metodo
      this.fotoSvc.editarFotoById(this.foto);
      this.messageService.add({
        severity: 'success',
        summary: 'Foto actualizada',
        detail: 'La foto fue actualizada con éxito',
        life: 3500,
      });
    } else {
      this.fotoSvc.editarFotoById(this.foto, this.imagen);
      this.messageService.add({
        severity: 'success',
        summary: 'Foto actualizada',
        detail: 'La foto fue actualizada con éxito',
        life: 3500,
      });
    }
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
