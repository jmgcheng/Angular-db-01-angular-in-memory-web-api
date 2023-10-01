import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './customer/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerListComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot([

      { path: 'customers', component: CustomerListComponent },
      {
        path: 'customers/:id/edit',
        component: CustomerEditComponent
      },

      { path: 'about-us', component: AboutComponent },
      { path: '', component: CustomerListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' } // if everthing fails, go here to default
    ]),

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
