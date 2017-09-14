import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoModalComponent } from './historico-modal.component';

describe('HistoricoModalComponent', () => {
  let component: HistoricoModalComponent;
  let fixture: ComponentFixture<HistoricoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
