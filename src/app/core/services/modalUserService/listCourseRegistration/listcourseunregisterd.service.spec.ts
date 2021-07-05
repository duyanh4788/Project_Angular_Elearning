import { TestBed } from '@angular/core/testing';

import { ListcourseregistrationService } from './listCourseregistration.service';

describe('ListcourseregistrationService', () => {
  let service: ListcourseregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcourseregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
