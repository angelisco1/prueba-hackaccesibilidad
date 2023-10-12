import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaHerramientasCerradaComponent } from './caja-herramientas-cerrada.component';

describe('CajaHerramientasCerradaComponent', () => {
  let component: CajaHerramientasCerradaComponent;
  let fixture: ComponentFixture<CajaHerramientasCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaHerramientasCerradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaHerramientasCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
