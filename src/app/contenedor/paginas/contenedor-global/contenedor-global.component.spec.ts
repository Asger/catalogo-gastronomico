import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorGlobalComponent } from './contenedor-global.component';

describe('ContenedorGlobalComponent', () => {
  let component: ContenedorGlobalComponent;
  let fixture: ComponentFixture<ContenedorGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
