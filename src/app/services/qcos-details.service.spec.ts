import { TestBed } from '@angular/core/testing';

import { QcosDetailsService } from './qcos-details.service';

describe('QcosDetailsService', () => {
  let service: QcosDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcosDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
