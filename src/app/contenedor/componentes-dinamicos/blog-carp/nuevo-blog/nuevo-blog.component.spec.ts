import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBlogComponent } from './nuevo-blog.component';

describe('NuevoBlogComponent', () => {
  let component: NuevoBlogComponent;
  let fixture: ComponentFixture<NuevoBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
