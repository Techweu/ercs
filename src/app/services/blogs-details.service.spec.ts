import { TestBed } from '@angular/core/testing';

import { BlogsDetailsService } from './blogs-details.service';

describe('BlogsDetailsService', () => {
  let service: BlogsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
