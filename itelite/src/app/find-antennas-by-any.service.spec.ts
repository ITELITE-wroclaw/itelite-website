import { TestBed } from '@angular/core/testing';

import { FindAntennasByAnyService } from './find-antennas-by-any.service';

describe('FindAntennasByAnyService', () => {
  let service: FindAntennasByAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindAntennasByAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
