import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIssuesComponent } from './student-issues.component';

describe('StudentIssuesComponent', () => {
  let component: StudentIssuesComponent;
  let fixture: ComponentFixture<StudentIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
