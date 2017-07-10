import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoTrabalhoStatusComponent } from './fluxo-trabalho-status.component';

describe('FluxoTrabalhoStatusComponent', () => {
  let component: FluxoTrabalhoStatusComponent;
  let fixture: ComponentFixture<FluxoTrabalhoStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxoTrabalhoStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxoTrabalhoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
