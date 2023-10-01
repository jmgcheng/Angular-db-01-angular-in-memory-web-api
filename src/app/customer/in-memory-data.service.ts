import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const mockCustomers = [
      {
        "id": 1,
        "firstName": 'Jhon',
        "lastName": 'Doe',
      },
      {
        "id": 2,
        "firstName": 'Mark',
        "lastName": 'Henry',
      },
    ];

    return { mockCustomers };
  }
}