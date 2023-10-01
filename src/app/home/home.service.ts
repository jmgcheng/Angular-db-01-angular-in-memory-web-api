import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICustomer } from '../customer/icustomer';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private mockCustomersUrl = 'api/mockCustomers';

  private sampleData(): Observable<{}[]> { // returns an array of {} that is an Observable
    return of([
      {
        'id': 1,
        'name': 'banana'
      },
      {
        'id': 2,
        'name': 'apple'
      },
    ])
  }

  getResult(): Observable<{}[]> {
    return this.sampleData();
  }


}
