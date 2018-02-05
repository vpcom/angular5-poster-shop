import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifComponent } from './notif.component';

import { CartNotificationService } from '../shared/services/cart-notification.service';

describe('NotifComponent', () => {
  let component: NotifComponent;
  let fixture: ComponentFixture<NotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ CartNotificationService ],
      declarations: [ NotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
