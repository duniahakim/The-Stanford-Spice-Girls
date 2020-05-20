import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCreateNewListingComponent } from './school-create-new-listing.component';

describe('SchoolCreateNewListingComponent', () => {
  let component: SchoolCreateNewListingComponent;
  let fixture: ComponentFixture<SchoolCreateNewListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCreateNewListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCreateNewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
