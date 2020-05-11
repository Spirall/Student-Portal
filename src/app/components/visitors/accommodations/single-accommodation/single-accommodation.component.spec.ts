import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAccommodationComponent } from './single-accommodation.component';

describe('SingleAccommodationComponent', () => {
  let component: SingleAccommodationComponent;
  let fixture: ComponentFixture<SingleAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
