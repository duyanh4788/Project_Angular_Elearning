import { TestBed } from '@angular/core/testing';

import { EditusermanagerService } from './editusermanager.service';

describe('EditusermanagerService', () => {
  let service: EditusermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditusermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
