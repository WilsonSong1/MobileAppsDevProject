import { TestBed } from '@angular/core/testing';

import { NewsService } from './newsservice.service';

describe('NewsserviceService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
