import { TestBed } from '@angular/core/testing';

import { SignupcourseService } from './signupcourse.service';

describe('SignupcourseService', () => {
  let service: SignupcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
