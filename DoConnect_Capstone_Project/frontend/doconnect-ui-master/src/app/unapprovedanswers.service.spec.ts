import { TestBed } from '@angular/core/testing';

import { UnapprovedanswersService } from './unapprovedanswers.service';

describe('UnapprovedanswersService', () => {
  let service: UnapprovedanswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnapprovedanswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
