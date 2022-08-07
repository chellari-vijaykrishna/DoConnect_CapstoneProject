import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedanswersComponent } from './unapprovedanswers.component';

describe('UnapprovedanswersComponent', () => {
  let component: UnapprovedanswersComponent;
  let fixture: ComponentFixture<UnapprovedanswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedanswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
