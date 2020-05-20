import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewMatchesComponent } from './sub-view-matches.component';

describe('SubViewMatchesComponent', () => {
  let component: SubViewMatchesComponent;
  let fixture: ComponentFixture<SubViewMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubViewMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubViewMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
