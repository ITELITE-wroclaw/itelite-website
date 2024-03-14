import { TestBed } from '@angular/core/testing';

import { CreateHTMLService } from './create-html.service';

describe('CreateHTMLService', () => {
  let service: CreateHTMLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHTMLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
