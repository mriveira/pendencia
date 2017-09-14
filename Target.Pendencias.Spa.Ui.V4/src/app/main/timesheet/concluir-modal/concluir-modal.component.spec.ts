import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirModalComponent } from './concluir-modal.component';

describe('ConcluirModalComponent', () => {
  let component: ConcluirModalComponent;
  let fixture: ComponentFixture<ConcluirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
