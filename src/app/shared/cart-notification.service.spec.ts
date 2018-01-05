import { TestBed, inject } from '@angular/core/testing';

import { CartNotificationService } from './cart-notification.service';

describe('CartNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartNotificationService]
    });
  });

  it('should be created', inject([CartNotificationService], (service: CartNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
