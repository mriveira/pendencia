import { TestBed, inject } from '@angular/core/testing';

import { FluxoTrabalhoStatusService } from './fluxo-trabalho-status.service';

describe('FluxoTrabalhoStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FluxoTrabalhoStatusService]
    });
  });

  it('should be created', inject([FluxoTrabalhoStatusService], (service: FluxoTrabalhoStatusService) => {
    expect(service).toBeTruthy();
  }));
});
