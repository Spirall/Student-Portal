import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBusComponent } from './student-bus.component';

describe('StudentBusComponent', () => {
  let component: StudentBusComponent;
  let fixture: ComponentFixture<StudentBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
