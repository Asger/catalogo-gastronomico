import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contenedor-global',
  templateUrl: './contenedor-global.component.html',
  styleUrls: ['./contenedor-global.component.scss'],
})
export class ContenedorGlobalComponent implements OnInit {
  items!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'fas fa-home',
        routerLink: 'inicio'
      },
      {
        label: 'Nuestra carta',
        icon: 'fas fa-clipboard',
      },
      {
        label: 'Blog',
        icon: 'fas fa-pen',
      },
      {
        label: 'Fotos',
        icon: 'fas fa-image',
      },
      {
        label: 'Sobre nosotros',
        icon: 'fas fa-users',
      },
      {
        label: 'Contacto',
        icon: 'fas fa-envelope',
      },
    ];
  }
}
