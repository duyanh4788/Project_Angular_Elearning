import { TestBed } from '@angular/core/testing';

import { GetlistcourseService } from './getlistcourse.service';

describe('GetlistcourseService', () => {
  let service: GetlistcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlistcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
