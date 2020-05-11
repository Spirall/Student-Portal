import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusesComponent } from './admin-buses.component';

describe('AdminBusesComponent', () => {
  let component: AdminBusesComponent;
  let fixture: ComponentFixture<AdminBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
