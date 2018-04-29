import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Deed } from './deed';
import { DEEDS } from './mock-deeds';

@Injectable()
export class DeedService {
  private deedSource = new Subject<any>();

  deeds$ = this.deedSource.asObservable();

  constructor() {}

  getAllDeeds(): Observable<Deed[]> {
    return of(DEEDS);
  }

  addDeed(val) {
    console.log('val in addDeed', val)
      this.deedSource.next(val)
  }

  getDeed() {
    return this.deeds$;
  }
}
