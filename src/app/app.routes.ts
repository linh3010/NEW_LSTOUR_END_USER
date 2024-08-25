import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HotelComponent } from './hotel-service/hotel/hotel.component';
import { HotelDetailComponent } from './hotel-service/hotel-detail/hotel-detail.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { OrderRoomComponent } from './hotel-service/order-room/order-room.component';
import { PaymentMethodComponent } from './user/payment-method/payment-method.component';
import { FlightComponent } from './flight-service/flight/flight.component';
import { FlightDetailComponent } from './flight-service/flight-detail/flight-detail.component';
import { OrderSeatComponent } from './flight-service/order-seat/order-seat.component';
import { BonusServiceComponent } from './flight-service/bonus-service/bonus-service.component';
import { CoachComponent } from './vehicle-service/coach/coach.component';
import { CoachDetailComponent } from './vehicle-service/coach-detail/coach-detail.component';
import { RestaurantComponent } from './restaurant-service/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-service/restaurant-detail/restaurant-detail.component';
import { OrderTableComponent } from './restaurant-service/order-table/order-table.component';
import { OrderDishComponent } from './restaurant-service/order-dish/order-dish.component';
import { TourComponent } from './tour-service/tour/tour.component';
import { TourDetailComponent } from './tour-service/tour-detail/tour-detail.component';
import { OrderTourComponent } from './tour-service/order-tour/order-tour.component';
import { EventComponent } from './event-service/event/event.component';
import { EventDetailComponent } from './event-service/event-detail/event-detail.component';
import { EventTicketComponent } from './event-service/event-ticket/event-ticket.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'userOrder', component: UserOrderComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'hotelDetail', component: HotelDetailComponent },
  { path: 'orderRoom', component: OrderRoomComponent },
  { path: 'paymentMethod', component: PaymentMethodComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'flightDetail', component: FlightDetailComponent },
  { path: 'orderSeaat', component: OrderSeatComponent },
  { path: 'bonusService', component: BonusServiceComponent },
  { path: 'coach', component: CoachComponent },
  { path: 'coachDetail', component: CoachDetailComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurantDetail', component: RestaurantDetailComponent },
  { path: 'orderTable', component: OrderTableComponent },
  { path: 'orderDish', component: OrderDishComponent },
  { path: 'tour', component: TourComponent },
  { path: 'tourDetail', component: TourDetailComponent },
  { path: 'orderTour', component: OrderTourComponent },
  { path: 'event', component: EventComponent },
  { path: 'eventDetail', component: EventDetailComponent },
  { path: 'eventTicket', component: EventTicketComponent },
];
