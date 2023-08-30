import { TestBed } from '@angular/core/testing';

import { DoulasService } from './doulas.service';

describe('DoulasService', () => {
  let service: DoulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
