import { TestBed } from '@angular/core/testing';

import { ChaityService } from './chaity.service';

describe('ChaityService', () => {
  let service: ChaityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
