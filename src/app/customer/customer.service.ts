import { Injectable } from '@angular/core';
import { Observable, of, tap, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICustomer } from '../customer/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private mockCustomersUrl = 'api/mockCustomers';

  private initializeCustomer(): ICustomer {
    // Return an initialized object
    return {
      "id": 0,
      "firstName": '',
      "lastName": '',
    };
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.mockCustomersUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
      );
  }

  getCustomer(id: number): Observable<ICustomer> {
    if (id === 0) {
      return of(this.initializeCustomer());
    }
    const url = `${this.mockCustomersUrl}/${id}`;
    return this.http.get<ICustomer>(url)
      .pipe(
        tap(data => console.log('getCustomer: ' + JSON.stringify(data))),
        // catchError(this.handleError)
      );
  }  

  createCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    customer.id = null;

    return this.http.post<ICustomer>(this.mockCustomersUrl, customer, { headers })
      .pipe(
        tap(data => console.log('createCustomer: ' + JSON.stringify(data))),
        // catchError(this.handleError)
      );
  }   
  
  
  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.mockCustomersUrl}/${customer.id}`;

    return this.http.put<ICustomer>(url, customer, { headers })
      .pipe(
        tap(() => console.log('updateCustomer: ' + customer.id)),
        map(() => customer),
      );
  }


  deleteCustomer(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.mockCustomersUrl}/${id}`;
    return this.http.delete<ICustomer>(url, { headers })
      .pipe(
        tap(data => console.log('deleteCustomer: ' + id)),
        // catchError(this.handleError)
      );
  }  

}
