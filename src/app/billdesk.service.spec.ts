import { TestBed } from '@angular/core/testing';

import { BilldeskService } from './billdesk.service';

describe('BilldeskService', () => {
  let service: BilldeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilldeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
