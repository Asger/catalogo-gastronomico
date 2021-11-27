import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-contenedor-global',
  templateUrl: './contenedor-global.component.html',
  styleUrls: ['./contenedor-global.component.scss'],
})
export class ContenedorGlobalComponent implements OnInit {
  visibleSidebar1: any;
  items!: MenuItem[];
  itemsPanel!: MenuItem[];

  // Esta variable me permitira saber el estado del usuario y de esta manera ocultar o mostrar botones, secciones, etc.
  public userData$: Observable<any> = this.authSvc.userData$;
  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
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
                label: 'Todas',
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
        label: 'Inicio',
        icon: 'fas fa-home',
        routerLink: 'admin/tabla-inicio',
        command: () => this.ocultarSidebar(),
      },
      {
        label: 'Nuestra carta',
        icon: 'fas fa-clipboard',
        items: [
          {
            label: 'Platillos',
            icon: 'fas fa-utensils',
            routerLink: 'admin/tabla-platillos',
            command: () => this.ocultarSidebar(),
          },
          {
            label: 'Bebidas',
            icon: 'fas fa-glass-whiskey',
            routerLink: 'admin/tabla-bebidas',
            command: () => this.ocultarSidebar(),
          },
          {
            label: 'Postres',
            icon: 'fas fa-cheese',
            routerLink: 'admin/tabla-postres',
            command: () => this.ocultarSidebar(),
          },
        ],
      },
      {
        label: 'Blog',
        icon: 'fas fa-pen',
        routerLink: 'admin/tabla-blog',
        command: () => this.ocultarSidebar(),
      },
      {
        label: 'Galería',
        icon: 'fas fa-image',
        routerLink: 'admin/tabla-fotos',
        command: () => this.ocultarSidebar(),
      },
    ];
  }
  ocultarSidebar() {
    this.visibleSidebar1 = false;
  }
  onLogout() {
    this.visibleSidebar1 = false;
    this.authSvc.logout();
  }
}
