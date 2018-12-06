import { TestBed } from '@angular/core/testing';

import { GardSerService } from './gard-ser.service';

describe('GardSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardSerService = TestBed.get(GardSerService);
    expect(service).toBeTruthy();
  });
});
