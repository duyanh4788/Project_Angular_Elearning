import { TestBed } from '@angular/core/testing';

import { EditcoursemanagerService } from './editcoursemanager.service';

describe('EditcoursemanagerService', () => {
  let service: EditcoursemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditcoursemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
