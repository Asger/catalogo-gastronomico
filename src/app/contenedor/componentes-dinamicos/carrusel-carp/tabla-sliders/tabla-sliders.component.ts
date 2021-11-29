import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ICarrusel } from 'src/app/shared/models/carrusel.interface';
import { CarruselService } from '../carrusel.service';

@Component({
  selector: 'app-tabla-sliders',
  templateUrl: './tabla-sliders.component.html',
  styleUrls: ['./tabla-sliders.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TablaSlidersComponent implements OnInit {
  productDialog!: boolean;
  cargado!: boolean;
  carrusel!: ICarrusel[];

  constructor(
    private carruselSvc: CarruselService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.carruselSvc.getCarrusel().subscribe((res) => {
      this.carrusel = res;
      this.cargado = true;
    });
  }

  /* 
    Este método me permitira eliminar un slider en específico, llamando al servicio y mandando el slider, el cual
    brindara su id para eliminarlo. 
  */
  deleteSlider(slider: ICarrusel) {
    this.confirmationService.confirm({
      message:
        'Estas seguro que quieres eliminar el slider llamado: ' +
        slider.titulo +
        '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle text-pink-500',
      accept: () => {
        this.carruselSvc
          .eliminarSliderById(slider)
          .then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Eliminado',
              detail: 'El slider fue eliminado con éxito',
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
