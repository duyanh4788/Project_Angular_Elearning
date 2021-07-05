import { TestBed } from '@angular/core/testing';

import { CandeactivateaddcourseGuard } from './candeactivateaddcourse.guard';

describe('CandeactivateaddcourseGuard', () => {
  let guard: CandeactivateaddcourseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivateaddcourseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
