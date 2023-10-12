import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertaAbiertaComponent } from './puerta-abierta.component';

describe('PuertaAbiertaComponent', () => {
  let component: PuertaAbiertaComponent;
  let fixture: ComponentFixture<PuertaAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuertaAbiertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertaAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
