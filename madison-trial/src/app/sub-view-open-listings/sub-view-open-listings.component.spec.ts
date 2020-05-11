import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewOpenListingsComponent } from './sub-view-open-listings.component';

describe('SubViewOpenListingsComponent', () => {
  let component: SubViewOpenListingsComponent;
  let fixture: ComponentFixture<SubViewOpenListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubViewOpenListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubViewOpenListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
