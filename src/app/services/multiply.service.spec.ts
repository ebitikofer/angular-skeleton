import { TestBed } from '@angular/core/testing';

import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiplyService = TestBed.get(MultiplyService);
    expect(service).toBeTruthy();
  });
});
