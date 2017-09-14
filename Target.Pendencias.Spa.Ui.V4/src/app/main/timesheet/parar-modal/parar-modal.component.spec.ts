import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PararModalComponent } from './parar-modal.component';

describe('PararModalComponent', () => {
  let component: PararModalComponent;
  let fixture: ComponentFixture<PararModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PararModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PararModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
