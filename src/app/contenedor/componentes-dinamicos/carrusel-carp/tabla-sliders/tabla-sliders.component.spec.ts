import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSlidersComponent } from './tabla-sliders.component';

describe('TablaSlidersComponent', () => {
  let component: TablaSlidersComponent;
  let fixture: ComponentFixture<TablaSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
