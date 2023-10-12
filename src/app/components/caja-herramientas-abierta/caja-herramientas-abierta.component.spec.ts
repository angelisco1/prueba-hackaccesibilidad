import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaHerramientasAbiertaComponent } from './caja-herramientas-abierta.component';

describe('CajaHerramientasAbiertaComponent', () => {
  let component: CajaHerramientasAbiertaComponent;
  let fixture: ComponentFixture<CajaHerramientasAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaHerramientasAbiertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaHerramientasAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
