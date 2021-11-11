import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-carta-menu',
  templateUrl: './carta-menu.component.html',
  styleUrls: ['./carta-menu.component.scss'],
})
export class CartaMenuComponent implements OnInit {
  seccion!: string | null;
  products!: any[];

  sortOptions!: any[];

  sortOrder!: number;
  sortKey!: string;
  sortField!: string;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    //leo el parametro de la ruta
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.seccion = params.get('seccion');
      console.log(this.seccion);
    });
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Asado',
        description: 'Product Description',
        image: 'https://www.cocinayvino.com/wp-content/uploads/2015/05/11966577_ml-e1481939374535.jpg',
        price: 1300,
        category: 'Platillo principal',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Ñoquis',
        description: 'Product Description',
        image: 'https://www.telesurtv.net/export/sites/telesur/img/multimedia/2018/09/26/xoquis_-_1-min.jpg_82148811.jpg',
        price: 1100,
        category: 'Platillo principal',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Sushi',
        description: 'Product Description',
        image: 'https://www.cocinayvino.com/wp-content/uploads/2017/03/45133250_l.jpg',
        price: 1000,
        category: 'Platillo principal',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Ensalada',
        description: 'Product Description',
        image: 'https://www.hola.com/imagenes/cocina/noticiaslibros/20210805194067/ensaladas-con-tres-cuatro-ingredientes/0-981-971/ingredientes-adobe-m.jpg',
        price: 1200,
        category: 'Platillo vegetariano',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: '244wgerg2',
        name: 'Ramen',
        description: 'Platillo principal',
        image: 'https://www.japonalternativo.com/wp-content/uploads/2018/12/receta-ramen-facil-casero.jpg',
        price: 1000,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];
    this.sortOptions = [
      { name: 'Mayor precio', code: '!price' },
      { name: 'Menor precio', code: 'price' },
    ];

   
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
