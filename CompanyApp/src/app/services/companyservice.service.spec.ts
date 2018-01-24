import { TestBed, inject } from '@angular/core/testing';

import { CompanyserviceService } from './companyservice.service';

describe('CompanyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyserviceService]
    });
  });

  it('should be created', inject([CompanyserviceService], (service: CompanyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
