import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Customer } from '../customer/customer';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerForm!: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder, private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
