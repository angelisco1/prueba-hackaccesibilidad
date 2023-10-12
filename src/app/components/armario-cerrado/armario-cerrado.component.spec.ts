import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmarioCerradoComponent } from './armario-cerrado.component';

describe('ArmarioCerradoComponent', () => {
  let component: ArmarioCerradoComponent;
  let fixture: ComponentFixture<ArmarioCerradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmarioCerradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmarioCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
