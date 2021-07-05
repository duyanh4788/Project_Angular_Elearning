import { TestBed } from '@angular/core/testing';

import { InforuserService } from './inforuser.service';

describe('InforuserService', () => {
  let service: InforuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InforuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
