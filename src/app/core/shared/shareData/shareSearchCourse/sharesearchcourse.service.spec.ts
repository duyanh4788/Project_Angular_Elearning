import { TestBed } from '@angular/core/testing';

import { SharesearchcourseService } from './sharesearchcourse.service';

describe('SharesearchcourseService', () => {
  let service: SharesearchcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharesearchcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
