import { TestBed } from '@angular/core/testing';

import { SigincourseService } from './sigincourse.service';

describe('SigincourseService', () => {
  let service: SigincourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigincourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
