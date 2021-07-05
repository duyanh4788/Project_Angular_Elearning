import { TestBed } from '@angular/core/testing';

import { ShareupdatecourseService } from './shareupdatecourse.service';

describe('ShareupdatecourseService', () => {
  let service: ShareupdatecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareupdatecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
