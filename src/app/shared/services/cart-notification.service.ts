import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CartNotificationService {

  private subject = new Subject<any>();
 
  sendToggleNotification() {
      this.subject.next();
  }

  receiveToggleNotification(): Observable<any> {
      return this.subject.asObservable();
  }
}
