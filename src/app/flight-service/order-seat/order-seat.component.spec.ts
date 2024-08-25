import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSeatComponent } from './order-seat.component';

describe('OrderSeatComponent', () => {
  let component: OrderSeatComponent;
  let fixture: ComponentFixture<OrderSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
