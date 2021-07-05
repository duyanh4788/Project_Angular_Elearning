import { TestBed } from '@angular/core/testing';

import { CandeactivateadduserGuard } from './candeactivateadduser.guard';

describe('CandeactivateadduserGuard', () => {
  let guard: CandeactivateadduserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivateadduserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
