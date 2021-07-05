import { TestBed } from '@angular/core/testing';

import { CandeactivateSignUpGuard } from './candeactivatesignup.guard';

describe('CandeactivateGuard', () => {
  let guard: CandeactivateSignUpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivateSignUpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
