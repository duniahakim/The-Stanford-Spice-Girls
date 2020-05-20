import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewConfirmedListingsComponent } from './school-view-confirmed-listings.component';

describe('SchoolViewConfirmedListingsComponent', () => {
  let component: SchoolViewConfirmedListingsComponent;
  let fixture: ComponentFixture<SchoolViewConfirmedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolViewConfirmedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolViewConfirmedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
