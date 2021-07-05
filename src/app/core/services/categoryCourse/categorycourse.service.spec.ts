import { TestBed } from '@angular/core/testing';

import { CategorycourseService } from './categorycourse.service';

describe('CategorycourseService', () => {
  let service: CategorycourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorycourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
