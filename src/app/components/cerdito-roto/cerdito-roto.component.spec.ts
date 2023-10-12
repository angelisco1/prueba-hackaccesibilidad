import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerditoRotoComponent } from './cerdito-roto.component';

describe('CerditoRotoComponent', () => {
  let component: CerditoRotoComponent;
  let fixture: ComponentFixture<CerditoRotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerditoRotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerditoRotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
