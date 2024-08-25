import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTourComponent } from './order-tour.component';

describe('OrderTourComponent', () => {
  let component: OrderTourComponent;
  let fixture: ComponentFixture<OrderTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
