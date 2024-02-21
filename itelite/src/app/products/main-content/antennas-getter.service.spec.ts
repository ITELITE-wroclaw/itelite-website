import { TestBed } from '@angular/core/testing';

import { AntennasGetterService } from './antennas-getter.service';

describe('AntennasGetterService', () => {
  let service: AntennasGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntennasGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
