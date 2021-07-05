import { TestBed } from '@angular/core/testing';

import { EditinfouserService } from './editinfouser.service';

describe('EditinfouserService', () => {
  let service: EditinfouserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditinfouserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
