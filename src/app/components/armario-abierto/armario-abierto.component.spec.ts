import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmarioAbiertoComponent } from './armario-abierto.component';

describe('ArmarioAbiertoComponent', () => {
  let component: ArmarioAbiertoComponent;
  let fixture: ComponentFixture<ArmarioAbiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmarioAbiertoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmarioAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
