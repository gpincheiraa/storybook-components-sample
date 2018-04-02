import { TestBed, inject } from '@angular/core/testing';

import { GMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GMapsService]
    });
  });

  it('should be created', inject([GMapsService], (service: GMapsService) => {
    expect(service).toBeTruthy();
  }));
});
