import { TestBed } from '@angular/core/testing';

import { ComputadoraService } from './computadora.service';

describe('ComputadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComputadoraService = TestBed.get(ComputadoraService);
    expect(service).toBeTruthy();
  });
});
