import { TestBed } from '@angular/core/testing';

import { ShareloadingInterceptor } from './shareloading.interceptor';

describe('ShareloadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ShareloadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ShareloadingInterceptor = TestBed.inject(ShareloadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
