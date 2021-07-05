import { TestBed } from '@angular/core/testing';

import { CourselistcategoryService } from './courselistcategory.service';

describe('CourselistcategoryService', () => {
  let service: CourselistcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourselistcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
