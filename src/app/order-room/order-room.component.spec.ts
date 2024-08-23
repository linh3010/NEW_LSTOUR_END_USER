import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRoomComponent } from './order-room.component';

describe('OrderRoomComponent', () => {
  let component: OrderRoomComponent;
  let fixture: ComponentFixture<OrderRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
