import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent implements OnInit {
  images!: any[];
  images2!: any[];
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

  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
        imagen:
          'https://d3b4yo2b5lbfy.cloudfront.net/wp-content/uploads/wallpapers/af6953a10506-1920x1080.jpg',
      },
      {
        imagen:
          'https://i.pinimg.com/564x/ca/1e/c9/ca1ec9ddae43e88891238e506901abd1.jpg',
      },
      {
        imagen:
          'https://www.todopaisajes.com/1920x1080/fondo-3d-del-espacio.jpg',
      },
      {
        imagen:
          'https://www.mascotahogar.com/1920x1080/dibujo-de-un-gato-como-wallpaper.jpg',
      },
      {
        imagen:
          'https://www.fonditos3d.com/1920x1080/arbol-de-un-universo-de-fantasia.jpg',
      },
    ];
    this.images2 = [
      {
        imagen:
          'https://www.mascotahogar.com/1920x1080/dibujo-de-un-gato-como-wallpaper.jpg',
      },
      {
        imagen:
          'https://i.pinimg.com/564x/ca/1e/c9/ca1ec9ddae43e88891238e506901abd1.jpg',
      },
      {
        imagen:
          'https://www.fonditos3d.com/1920x1080/arbol-de-un-universo-de-fantasia.jpg',
      },
    ];
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
