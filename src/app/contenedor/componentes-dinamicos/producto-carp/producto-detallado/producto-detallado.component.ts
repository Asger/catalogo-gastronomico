import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-producto-detallado',
  templateUrl: './producto-detallado.component.html',
  styleUrls: ['./producto-detallado.component.scss'],
})
export class ProductoDetalladoComponent implements OnInit {
  seccion!: string | null;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.seccion = params.get('id');
      console.log(this.seccion);
    });
  }
}
