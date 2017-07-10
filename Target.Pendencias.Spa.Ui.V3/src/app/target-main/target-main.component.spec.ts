import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetMainComponent } from './target-main.component';

describe('TargetMainComponent', () => {
  let component: TargetMainComponent;
  let fixture: ComponentFixture<TargetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
