import { TestBed } from '@angular/core/testing';

import { CandeactivateupdatecourseGuard } from './candeactivateupdatecourse.guard';

describe('CandeactivateupdatecourseGuard', () => {
  let guard: CandeactivateupdatecourseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivateupdatecourseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
