import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleResComponent } from './admin-single-res.component';

describe('AdminSingleResComponent', () => {
  let component: AdminSingleResComponent;
  let fixture: ComponentFixture<AdminSingleResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSingleResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
