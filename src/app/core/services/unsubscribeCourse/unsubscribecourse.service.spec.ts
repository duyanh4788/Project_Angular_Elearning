import { TestBed } from '@angular/core/testing';

import { UnsubscribecourseService } from './unsubscribecourse.service';

describe('UnsubscribecourseService', () => {
  let service: UnsubscribecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsubscribecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
