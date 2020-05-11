import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSingleArticleComponent } from './admin-single-article.component';

describe('AdminSingleArticleComponent', () => {
  let component: AdminSingleArticleComponent;
  let fixture: ComponentFixture<AdminSingleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSingleArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSingleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
