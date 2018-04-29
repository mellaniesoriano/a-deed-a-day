import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Deed } from './deed';
import { DEEDS } from './mock-deeds';

@Injectable()
export class DeedService {
  constructor() {}

  getAllDeeds(): Observable<Deed[]> {
    return of(DEEDS);
  }
}
