import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesModalComponent } from './detalhes-modal.component';

describe('DetalhesModalComponent', () => {
  let component: DetalhesModalComponent;
  let fixture: ComponentFixture<DetalhesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
