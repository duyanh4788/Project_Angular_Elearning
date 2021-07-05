import { TestBed } from '@angular/core/testing';

import { SharemodalcoursemanagerService } from './sharemodalcoursemanager.service';

describe('SharemodalcoursemanagerService', () => {
  let service: SharemodalcoursemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemodalcoursemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
