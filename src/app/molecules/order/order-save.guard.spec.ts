import { TestBed, async, inject } from '@angular/core/testing';

import { OrderSaveGuard } from './order-save.guard';

describe('OrderSaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderSaveGuard]
    });
  });

  it('should ...', inject([OrderSaveGuard], (guard: OrderSaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
