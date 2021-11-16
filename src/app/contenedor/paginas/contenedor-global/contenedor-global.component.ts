import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contenedor-global',
  templateUrl: './contenedor-global.component.html',
  styleUrls: ['./contenedor-global.component.scss'],
})
export class ContenedorGlobalComponent implements OnInit {
  visibleSidebar1: any;
  items!: MenuItem[];
  itemsPanel!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'fas fa-home',
        routerLink: 'inicio',
      },
      {
        label: 'Nuestra carta',
        icon: 'fas fa-clipboard',
        items: [
          {
            label: 'Platillos',
            icon: 'fas fa-utensils',
            items: [
              {
                label: 'Principales',
                icon: 'fas fa-drumstick-bite',
                routerLink: 'carta-menu/platillos-principales',
              },
              {
                label: 'Vegetarianos',
                icon: 'fas fa-carrot',
                routerLink: 'carta-menu/platillos-vegetarianos',
              },
              {
                separator: true,
              },
              {
                label: 'Todos',
                icon: 'fas fa-asterisk',
                routerLink: 'carta-menu/platillos',
              },
            ],
          },
          {
            label: 'Bebidas',
            icon: 'fas fa-glass-whiskey',
            items: [
              {
                label: 'Sin alcohol',
                icon: 'fa-lg fas fa-wine-glass',
                routerLink: 'carta-menu/bebidas-sin-alcohol',
              },
              {
                label: 'Con alcohol',
                icon: 'fas fa-glass-martini-alt',
                routerLink: 'carta-menu/bebidas-alcoholicas',
              },
              {
                separator: true,
              },
              {
                label: 'Todos',
                icon: 'fas fa-asterisk',
                routerLink: 'carta-menu/bebidas',
              },
            ],
          },
          {
            label: 'Postres',
            icon: 'fas fa-cheese',
            routerLink: 'carta-menu/postres',
          },
        ],
      },
      {
        label: 'Blog',
        icon: 'fas fa-pen',
        routerLink: 'blog',
      },
      {
        label: 'Galería',
        icon: 'fas fa-image',
        routerLink: 'galeria',
      },
      {
        label: 'Nosotros',
        icon: 'fas fa-users',
        routerLink: 'nosotros',
      },
      {
        label: 'Contacto',
        icon: 'fas fa-envelope',
        routerLink: 'contacto',
      },
    ];
    this.itemsPanel = [
      {
        label: 'Home',
        routerLink: '',
      },
      {
        label: 'Nuestra carta',
        items: [
          {
            label: 'Platillos',
            icon: 'fas fa-utensils',
            items: [
              {
                label: 'Principales',
                icon: 'fas fa-drumstick-bite',
                routerLink: '',
              },
              {
                label: 'Vegetarianos',
                icon: 'fas fa-carrot',
                routerLink: '',
              },
            ],
          },
          {
            label: 'Bebidas',
            icon: 'fas fa-glass-whiskey',
            items: [
              {
                label: 'Sin alcohol',
                icon: 'fa-lg fas fa-wine-glass',
                routerLink: '',
              },
              {
                label: 'Con alcohol',
                icon: 'fas fa-glass-martini-alt',
                routerLink: '',
              },
            ],
          },
          {
            label: 'Postres',
            icon: 'fas fa-cheese',
            routerLink: '',
          },
        ],
      },
      {
        label: 'Blog',
        routerLink: '',
      },
    ];
  }
}
