import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFotosComponent } from './tabla-fotos.component';

describe('TablaFotosComponent', () => {
  let component: TablaFotosComponent;
  let fixture: ComponentFixture<TablaFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
