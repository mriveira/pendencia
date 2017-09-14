import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclassificarModalComponent } from './reclassificar-modal.component';

describe('ReclassificarModalComponent', () => {
  let component: ReclassificarModalComponent;
  let fixture: ComponentFixture<ReclassificarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclassificarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclassificarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
