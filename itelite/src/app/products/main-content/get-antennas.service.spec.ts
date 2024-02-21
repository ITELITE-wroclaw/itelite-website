import { TestBed } from '@angular/core/testing';

import { GetAntennasService } from './get-antennas.service';

describe('GetAntennasService', () => {
  let service: GetAntennasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAntennasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
