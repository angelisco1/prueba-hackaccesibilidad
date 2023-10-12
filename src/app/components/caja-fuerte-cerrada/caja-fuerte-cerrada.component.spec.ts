import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaFuerteCerradaComponent } from './caja-fuerte-cerrada.component';

describe('CajaFuerteCerradaComponent', () => {
  let component: CajaFuerteCerradaComponent;
  let fixture: ComponentFixture<CajaFuerteCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaFuerteCerradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajaFuerteCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
