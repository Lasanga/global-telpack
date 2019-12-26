import { TestBed } from '@angular/core/testing';

import { GlobalTelpackService } from './global-telpack.service';

describe('GlobalTelpackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalTelpackService = TestBed.get(GlobalTelpackService);
    expect(service).toBeTruthy();
  });
});
