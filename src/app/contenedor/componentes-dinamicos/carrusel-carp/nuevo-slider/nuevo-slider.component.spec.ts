import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSliderComponent } from './nuevo-slider.component';

describe('NuevoSliderComponent', () => {
  let component: NuevoSliderComponent;
  let fixture: ComponentFixture<NuevoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
