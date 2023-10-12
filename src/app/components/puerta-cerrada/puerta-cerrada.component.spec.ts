import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaCerradaComponent } from './puerta-cerrada.component';

describe('PuertaCerradaComponent', () => {
  let component: PuertaCerradaComponent;
  let fixture: ComponentFixture<PuertaCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertaCerradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertaCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
