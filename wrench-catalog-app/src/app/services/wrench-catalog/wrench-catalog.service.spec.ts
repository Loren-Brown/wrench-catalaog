import { TestBed } from '@angular/core/testing';

import { WrenchCatalogService } from './wrench-catalog.service';

describe('WrenchCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrenchCatalogService = TestBed.get(WrenchCatalogService);
    expect(service).toBeTruthy();
  });
});
