import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewOpenListingsComponent } from './school-view-open-listings.component';

describe('SchoolViewOpenListingsComponent', () => {
  let component: SchoolViewOpenListingsComponent;
  let fixture: ComponentFixture<SchoolViewOpenListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolViewOpenListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolViewOpenListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
