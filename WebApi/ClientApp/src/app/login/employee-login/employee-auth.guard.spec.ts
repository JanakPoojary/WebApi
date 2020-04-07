import { TestBed, async, inject } from '@angular/core/testing';

import { EmployeeAuthGuard } from './employee-auth.guard';

describe('EmployeeAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAuthGuard]
    });
  });

  it('should ...', inject([EmployeeAuthGuard], (guard: EmployeeAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
