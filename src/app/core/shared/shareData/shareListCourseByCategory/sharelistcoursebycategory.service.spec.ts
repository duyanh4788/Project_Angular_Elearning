import { TestBed } from '@angular/core/testing';

import { SharelistcoursebycategoryService } from './sharelistcoursebycategory.service';

describe('SharelistcoursebycategoryService', () => {
  let service: SharelistcoursebycategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharelistcoursebycategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
