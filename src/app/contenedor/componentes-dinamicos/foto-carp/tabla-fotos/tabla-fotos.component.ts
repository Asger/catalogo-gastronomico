import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { IFoto } from 'src/app/shared/models/foto.interface';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-tabla-fotos',
  templateUrl: './tabla-fotos.component.html',
  styleUrls: ['./tabla-fotos.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TablaFotosComponent implements OnInit {
  productDialog!: boolean;
  cargado!: boolean;
  fotos!: IFoto[];

  constructor(
    private fotoSvc: FotoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.fotoSvc.getTodasFotos().subscribe((res) => {
      this.fotos = res;
      this.cargado = true;
    });
  }

  /* 
    Este método me permitira eliminar una foto en específico, llamando al servicio y mandando la foto, la cual
    brindara su id para eliminarla. 
  */
  deleteFoto(foto: IFoto) {
    this.confirmationService.confirm({
      message:
        'Estas seguro que quieres eliminar la foto llamada: ' +
        foto.titulo +
        '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle text-pink-500',
      accept: () => {
        this.fotoSvc
          .eliminarFotoById(foto)
          .then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Eliminada',
              detail: 'La foto fue eliminada con éxito',
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
