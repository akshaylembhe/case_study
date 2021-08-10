import { TestBed } from '@angular/core/testing';

import { PaymentservicesService } from './paymentservices.service';

describe('PaymentservicesService', () => {
  let service: PaymentservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
