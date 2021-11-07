import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  images!: any[];
  responsiveOptions: any;
  responsiveOptionsProducts: any;
  products!: any[];
  constructor() {
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
    this.responsiveOptionsProducts = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
        
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
        
      },
    ];
  }

  ngOnInit(): void {
    this.images = [
      {
        name: 'Elias',
        url: 'https://www.cocinayvino.com/wp-content/uploads/2015/05/11966577_ml-e1481939374535.jpg',
        price: 200,
      },
      {
        name: 'Pedro',
        url: 'https://media.istockphoto.com/photos/grilled-sliced-steak-striploin-picture-id692634586?k=20&m=692634586&s=612x612&w=0&h=QkuTwEEx03aHVp9e3M8bIowGEQiA4kjx34nb1y4CX2A=',
        price: 200,
      },
      {
        name: 'Lucas',
        url: 'https://files.adventistas.org/quierovidaysalud.com/2019/07/shutterstock_1108602593.jpg',
        price: 200,
      },
      {
        name: 'Elias',
        url: 'https://saboryestilo.com.mx/wp-content/uploads/2019/09/platillos-tipicos-de-mexico1-1200x675.jpg',
        price: 200,
      },
      {
        name: 'Pedro',
        url: 'https://www.cocinayvino.com/wp-content/uploads/2017/03/45133250_l.jpg',
        price: 200,
      },
      {
        name: 'Lucas',
        url: 'https://eligeveg.com/mercy4animals.wpengine.com/sites/446/2019/02/Falafel-sandwich-1000x570.jpg',
        price: 200,
      },
    ];
    this.products = [
      {
        name: 'Elias',
        url: 'https://www.cocinayvino.com/wp-content/uploads/2015/05/11966577_ml-e1481939374535.jpg',
        price: 200,
        descripcion:'holaaa'
      },
      {
        name: 'Pedro',
        url: 'https://www.cocinayvino.com/wp-content/uploads/2017/03/45133250_l.jpg',
        price: 200,
        descripcion:'holaaa como estas'
      },
      {
        name: 'Lucas',
        url: 'https://eligeveg.com/mercy4animals.wpengine.com/sites/446/2019/02/Falafel-sandwich-1000x570.jpg',
        price: 200,
        descripcion:'holaaa asdasdasdadasdjakjd aksdjaslk j asdkaslkj lkjasdlkja kljalk'
      },
    ];
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
