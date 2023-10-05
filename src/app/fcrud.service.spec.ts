import { TestBed } from '@angular/core/testing';

import { FcrudService } from './fcrud.service';

describe('FcrudService', () => {
  let service: FcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
