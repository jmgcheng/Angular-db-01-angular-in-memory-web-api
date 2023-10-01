# Angular - db - 01 - angular-in-memory-web-api
Simple crud using angular-in-memory-web-api with Reactive FormBuilder

# Step 01
```
npm install angular-in-memory-web-api --save-dev

ng g c customer/customer-list --flat --skip-tests 
ng g c customer/customer-edit --flat --skip-tests 
ng g class customer/customer --flat --skip-tests
ng g i customer/icustomer --flat --skip-tests
ng g s customer/customer --flat --skip-tests
ng g s customer/in-memory-data --skip-tests --flat --dry-run
```

# Step 02 - code
- app.module.ts
- in-memory-data.service.ts
- icustomer.ts
- customer.ts
- customer.service.ts
- customer-list.component.ts
- customer-list.component.html
- customer-edit.component.ts
- customer-edit.component.html

# Step 03
```
ng serve -o
```