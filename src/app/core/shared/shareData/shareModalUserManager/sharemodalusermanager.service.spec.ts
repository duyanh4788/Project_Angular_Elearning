import { TestBed } from '@angular/core/testing';

import { SharemodalusermanagerService } from './sharemodalusermanager.service';

describe('SharemodalusermanagerService', () => {
  let service: SharemodalusermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemodalusermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
