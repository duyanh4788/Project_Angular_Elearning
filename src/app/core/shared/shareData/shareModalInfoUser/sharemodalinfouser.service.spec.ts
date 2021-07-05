import { TestBed } from '@angular/core/testing';

import { SharemodalinfouserService } from './sharemodalinfouser.service';

describe('SharemodalinfouserService', () => {
  let service: SharemodalinfouserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemodalinfouserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
