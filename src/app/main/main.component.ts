import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

import { CartNotificationService } from '../shared/cart-notification.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  opened = true;
  expand = true;
  isMobile = false;
  subscription: Subscription;

  constructor(public media:ObservableMedia, private cartNotificationService: CartNotificationService) {
      // subscribe to toggle event for the cart panel
      this.subscription = this.cartNotificationService.receiveToggleNotification().subscribe(any => {
        this.sidenavToggle();
      });
  }

  ngOnInit() {
    if (this.media.isActive('xs')) {
      this.setMobileContext();
    }
  }

  setMobileContext() { 
    this.isMobile = true;
    this.opened = false;
    this.expand = false;
  }

  sidenavToggle() {
    if (this.isMobile) {
      let sidenavMob = document.getElementById('sidenav-mob');
      sidenavMob.style.display = 'block';
    }
    this.opened = !this.opened;
    this.expand = !this.expand;
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
