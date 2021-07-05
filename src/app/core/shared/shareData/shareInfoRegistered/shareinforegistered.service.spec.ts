import { TestBed } from '@angular/core/testing';

import { ShareinforegisteredService } from './shareinforegistered.service';

describe('ShareinforegisteredService', () => {
  let service: ShareinforegisteredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareinforegisteredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
