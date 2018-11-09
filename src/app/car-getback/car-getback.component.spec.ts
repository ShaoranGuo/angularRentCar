import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGetbackComponent } from './car-getback.component';

describe('CarGetbackComponent', () => {
  let component: CarGetbackComponent;
  let fixture: ComponentFixture<CarGetbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarGetbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGetbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
