import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroColgadoComponent } from './cuadro-colgado.component';

describe('CuadroComponent', () => {
  let component: CuadroColgadoComponent;
  let fixture: ComponentFixture<CuadroColgadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuadroColgadoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CuadroColgadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
