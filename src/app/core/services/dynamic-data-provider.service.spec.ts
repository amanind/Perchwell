import { TestBed } from '@angular/core/testing';

import { DynamicDataProviderService } from './dynamic-data-provider.service';

describe('DynamicDataProviderService', () => {
  let service: DynamicDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
