import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ICarrusel } from '../../../../shared/models/carrusel.interface';
import { CarruselService } from '../carrusel.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nuevo-slider',
  templateUrl: './nuevo-slider.component.html',
  styleUrls: ['./nuevo-slider.component.scss'],
  providers: [MessageService],
})
export class NuevoSliderComponent implements OnInit {
  public previsualizacion: string | undefined;
  private imagen: any;
  private imagenOriginal: any;
  public fecha!: Date | undefined;
  slider: ICarrusel = {
    titulo: '',
    contenido: '',
  };

  editar: boolean = false;
  constructor(
    private carruselSvc: CarruselService,
    private sanitizer: DomSanitizer,
    private activetedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  // Creo el formulario, junto a sus respectivas propiedades y validaciones.
  public sliderForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', [
      Validators.required,
      Validators.maxLength(410),
    ]),
    imagen: new FormControl('', Validators.required),
    horaCreacion: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // Toma los parametros de las rutas.
    const params = this.activetedRoute.snapshot.params;
    if (params.id) {
      /* 
          Si existe un id, quiere decir que va a editar un slider,
          por ello, traigo los datos actuales de ese slider y los asigno al objeto slider.
      */
      this.carruselSvc.getUnSlider(params.id).subscribe(
        (res) => {
          if (res != undefined) {
            this.previsualizacion = res.imagen;
            this.slider.titulo = res.titulo;
            this.slider.contenido = res.contenido;
            this.fecha = res.horaCreacion?.toDate();

            this.slider.id = params.id;
            this.imagen = res.imagen;
            this.imagenOriginal = res.imagen;

            this.editar = true;
          }
        },
        (err) => console.error(err)
      );
    }
  }

  // Este método es el encargado de llamar al servicio o intermediario para poder crear un slider en el carrusel.
  agregarSlider(data: ICarrusel) {
    this.carruselSvc.preCrearYActualizarSlider(data, this.imagen);
    this.previsualizacion = undefined;
    this.messageService.add({
      severity: 'success',
      summary: 'Nuevo slider creado',
      detail: 'El slider fue creado con éxito',
      life: 3500,
    });
    this.sliderForm.reset();
    this.slider.titulo = '';
    this.slider.contenido = '';
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
    Este método actualizara el slider deseado, primero comprobando si el administrador cambio la imagen o no,
    para subir la imagen en caso de que haya seleccionado otra.
  */
  actualizarSlider() {
    if (this.imagen === this.imagenOriginal) {
      this.slider.imagen = this.imagenOriginal;
      //llamamos al metodo
      this.carruselSvc.editarSliderById(this.slider);
      this.messageService.add({
        severity: 'success',
        summary: 'Slider actualizado',
        detail: 'El slider fue actualizado con éxito',
        life: 3500,
      });
    } else {
      this.carruselSvc.editarSliderById(this.slider, this.imagen);
      this.messageService.add({
        severity: 'success',
        summary: 'Slider actualizado',
        detail: 'El slider fue actualizado con éxito',
        life: 3500,
      });
    }
  }
}
