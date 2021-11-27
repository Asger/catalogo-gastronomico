import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFoto } from 'src/app/shared/models/foto.interface';
import { FotoService } from '../../componentes-dinamicos/foto-carp/foto.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  fotosRestaurante!: IFoto[];
  fotosPlatillos!: IFoto[];

  responsiveOptions: any[] = [
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

  displayCustom!: boolean;

  activeIndex: number = 0;

  displayCustom2!: boolean;

  activeIndex2: number = 0;

  constructor(private fotoSvc: FotoService) {}

  ngOnInit(): void {
    this.fotoSvc.getTodasFotos().subscribe((res) => {
      this.fotosRestaurante = res.filter((el) => {
        return el.categoria === 'Foto de nuestro restaurante';
      });
      this.fotosPlatillos = res.filter((el) => {
        return el.categoria === 'Foto de nuestro platillo más destacado';
      });
    });
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
  imageClickdos(index: number) {
    this.activeIndex2 = index;
    this.displayCustom2 = true;
  }
}
