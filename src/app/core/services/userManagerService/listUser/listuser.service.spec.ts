import { TestBed } from '@angular/core/testing';

import { ListuserService } from './listuser.service';

describe('ListuserService', () => {
  let service: ListuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
