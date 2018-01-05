import { Component, OnInit} from '@angular/core';

import { CartNotificationService } from '../shared/cart-notification.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})
export class NotifComponent implements OnInit {

  constructor(private cartNotificationService: CartNotificationService) {}
     
  ngOnInit() {
  }

  sendMessage(): void {
    this.cartNotificationService.sendToggleNotification();
  }

  sidenavToggle() {
    this.sendMessage();
  }
}
