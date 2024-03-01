import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getAtennaDetailsResolver } from './get-atenna-details.resolver';

describe('getAtennaDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getAtennaDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
