import { TestBed } from '@angular/core/testing';

import { SearchlistcourseService } from './searchlistcourse.service';

describe('SearchlistcourseService', () => {
  let service: SearchlistcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchlistcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
