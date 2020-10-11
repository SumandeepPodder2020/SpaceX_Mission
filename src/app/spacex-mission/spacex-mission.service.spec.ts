import { TestBed } from '@angular/core/testing';

import { SpacexMissionService } from './spacex-mission.service';

describe('SpacexMissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexMissionService = TestBed.get(SpacexMissionService);
    expect(service).toBeTruthy();
  });
});
