import { TestBed } from '@angular/core/testing';

import { LeaveDataService } from './leave-data.service';

describe('LeaveDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveDataService = TestBed.get(LeaveDataService);
    expect(service).toBeTruthy();
  });
});
