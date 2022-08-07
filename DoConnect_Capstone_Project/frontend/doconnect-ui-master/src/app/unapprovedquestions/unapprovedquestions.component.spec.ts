import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedquestionsComponent } from './unapprovedquestions.component';

describe('UnapprovedquestionsComponent', () => {
  let component: UnapprovedquestionsComponent;
  let fixture: ComponentFixture<UnapprovedquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
