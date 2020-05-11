import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentStudentComponent } from './resident-student.component';

describe('ResidentStudentComponent', () => {
  let component: ResidentStudentComponent;
  let fixture: ComponentFixture<ResidentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
