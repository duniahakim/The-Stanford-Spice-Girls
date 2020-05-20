import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewConfirmedMatchesComponent } from './sub-view-confirmed-matches.component';

describe('SubViewConfirmedMatchesComponent', () => {
  let component: SubViewConfirmedMatchesComponent;
  let fixture: ComponentFixture<SubViewConfirmedMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubViewConfirmedMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubViewConfirmedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
