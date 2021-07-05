import { TestBed } from '@angular/core/testing';

import { InfocourseService } from './infocourse.service';

describe('InfocourseService', () => {
  let service: InfocourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfocourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
