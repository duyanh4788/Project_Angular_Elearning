import { TestBed } from '@angular/core/testing';

import { AuthinfouserGuard } from './authinfouser.guard';

describe('AuthinfouserGuard', () => {
  let guard: AuthinfouserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthinfouserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
