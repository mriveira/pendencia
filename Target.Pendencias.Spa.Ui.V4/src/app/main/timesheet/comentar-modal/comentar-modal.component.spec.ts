import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarModalComponent } from './comentar-modal.component';

describe('ComentarModalComponent', () => {
  let component: ComentarModalComponent;
  let fixture: ComponentFixture<ComentarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
