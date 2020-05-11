import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResidencesComponent } from './admin-residences.component';

describe('AdminResidencesComponent', () => {
  let component: AdminResidencesComponent;
  let fixture: ComponentFixture<AdminResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
