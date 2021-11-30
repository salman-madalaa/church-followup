import { TestBed } from '@angular/core/testing';

import { FollowupPersonService } from './followup-person.service';

describe('FollowupPersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowupPersonService = TestBed.get(FollowupPersonService);
    expect(service).toBeTruthy();
  });
});
