import { TestBed, inject } from '@angular/core/testing';

import { HotelsServiceService } from './hotels-service.service';

describe('HotelsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsServiceService]
    });
  });

  it('should be created', inject([HotelsServiceService], (service: HotelsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
