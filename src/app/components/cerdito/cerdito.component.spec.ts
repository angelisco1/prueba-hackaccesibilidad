import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerditoComponent } from './cerdito.component';

describe('CerditoComponent', () => {
  let component: CerditoComponent;
  let fixture: ComponentFixture<CerditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
