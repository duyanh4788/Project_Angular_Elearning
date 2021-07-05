import { TestBed } from '@angular/core/testing';

import { ListcoursemanagerService } from './listcoursemanager.service';

describe('ListcoursemanagerService', () => {
  let service: ListcoursemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcoursemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
