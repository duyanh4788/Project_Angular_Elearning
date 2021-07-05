import { TestBed } from '@angular/core/testing';

import { ListuserregistrationService } from './listuserregistration.service';

describe('ListuserregistrationService', () => {
  let service: ListuserregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListuserregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
