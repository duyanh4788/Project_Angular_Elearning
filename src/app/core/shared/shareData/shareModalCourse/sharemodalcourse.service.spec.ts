import { TestBed } from '@angular/core/testing';
import { SharemodalcourseService } from './sharemodalcourse.service';

describe('SharemodalcourseService', () => {
  let service: SharemodalcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemodalcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
