import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { ICustomer } from './icustomer';
import { CustomerService } from './customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm!: FormGroup;
  customer!: ICustomer;
  private sub!: Subscription;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.customerService.getCustomer(id)
          .subscribe({
            next: data => {
              this.customerForm.reset();
              this.customer = data;
              this.customerForm.patchValue({
                firstName: data.firstName,
                lastName: data.lastName,
              });

            },
            // error: err => this.errorMessage = err
          });
      }
    );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  save(): void {
    console.log(this.customerForm.value);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));

    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        const c = { ...this.customer, ...this.customerForm.value };

        if (c.id === 0) {
          this.customerService.createCustomer(c)
            .subscribe({
              next: x => {
                this.customerForm.reset();
                this.router.navigate(['/customers']);
              }
            });
        } else {
          this.customerService.updateCustomer(c)
            .subscribe({
              next: x => {
                this.customerForm.reset();
                this.router.navigate(['/customers']);
              }
            });
        }
      } else {
        this.customerForm.reset();
        this.router.navigate(['/customers']);
      }
    } else {
      // this.errorMessage = 'Please correct the validation errors.';
    }


  }

  deleteCustomer(): void {
    if (this.customer.id === 0) {
      // Don't delete, it was never saved.
      this.customerForm.reset();
      this.router.navigate(['/customers']);
    } else if (this.customer.id) {
      if (confirm(`Really delete the customer: ${this.customer.firstName}?`)) {
        this.customerService.deleteCustomer(this.customer.id)
          .subscribe({
            next: x => {
              this.customerForm.reset();
              this.router.navigate(['/customers']);
            }
          });
      }
    }
  }
}
