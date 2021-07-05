import { TestBed } from '@angular/core/testing';

import { DeletecourseService } from './deletecourse.service';

describe('DeletecourseService', () => {
  let service: DeletecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
