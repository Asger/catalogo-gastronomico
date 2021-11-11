import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaMenuComponent } from './carta-menu.component';

describe('CartaMenuComponent', () => {
  let component: CartaMenuComponent;
  let fixture: ComponentFixture<CartaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
