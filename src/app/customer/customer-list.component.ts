import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { ICustomer } from './icustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: data => {
        this.customers = data;
      }
    });
  }

}
