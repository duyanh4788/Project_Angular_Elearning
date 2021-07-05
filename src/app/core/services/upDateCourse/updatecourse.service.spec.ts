import { TestBed } from '@angular/core/testing';

import { UpdatecourseService } from './updatecourse.service';

describe('UpdatecourseService', () => {
  let service: UpdatecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
