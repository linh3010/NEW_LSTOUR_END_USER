import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusServiceComponent } from './bonus-service.component';

describe('BonusServiceComponent', () => {
  let component: BonusServiceComponent;
  let fixture: ComponentFixture<BonusServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
