import { TestBed } from '@angular/core/testing';

import { QualityOrdersService } from './quality-orders.service';

describe('QualityOrdersService', () => {
  let service: QualityOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
