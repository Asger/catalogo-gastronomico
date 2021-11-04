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
        label: 'Nosotros',
        icon: 'fas fa-users',
      },
      {
        label: 'Menú',
        icon: 'fas fa-clipboard',
      },
      {
        label: 'Blog',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Contacto',
        icon: 'fas fa-envelope',
      },
    ];
  }
}
