import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSeccionComponent } from './hero-seccion.component';

describe('HeroSeccionComponent', () => {
  let component: HeroSeccionComponent;
  let fixture: ComponentFixture<HeroSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
