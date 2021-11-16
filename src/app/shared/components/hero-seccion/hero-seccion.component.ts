import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-seccion',
  templateUrl: './hero-seccion.component.html',
  styleUrls: ['./hero-seccion.component.scss'],
})
export class HeroSeccionComponent implements OnInit {
  @Input() nombreSeccion!: string;
  @Input() descripcionSeccion!: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
