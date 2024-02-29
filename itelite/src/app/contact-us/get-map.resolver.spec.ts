import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getMapResolver } from './get-map.resolver';

describe('getMapResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getMapResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
