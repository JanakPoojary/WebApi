import { TestBed } from '@angular/core/testing';

import { EmpleaveDataService } from './empleave-data.service';

describe('EmpleaveDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleaveDataService = TestBed.get(EmpleaveDataService);
    expect(service).toBeTruthy();
  });
});
