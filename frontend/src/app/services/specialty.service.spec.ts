import { TestBed } from '@angular/core/testing';

import { SpecialtyService } from './specialty.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('SpecialtyService', () => {
  let service: SpecialtyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpecialtyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
