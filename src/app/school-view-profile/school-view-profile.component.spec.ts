import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewProfileComponent } from './school-view-profile.component';

describe('SchoolViewProfileComponent', () => {
  let component: SchoolViewProfileComponent;
  let fixture: ComponentFixture<SchoolViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
