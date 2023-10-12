import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartilloComponent } from './martillo.component';

describe('MartilloComponent', () => {
  let component: MartilloComponent;
  let fixture: ComponentFixture<MartilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartilloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MartilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
