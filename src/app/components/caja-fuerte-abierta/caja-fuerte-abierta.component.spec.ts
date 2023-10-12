import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaFuerteAbiertaComponent } from './caja-fuerte-abierta.component';

describe('CajaFuerteAbiertaComponent', () => {
  let component: CajaFuerteAbiertaComponent;
  let fixture: ComponentFixture<CajaFuerteAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaFuerteAbiertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaFuerteAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
