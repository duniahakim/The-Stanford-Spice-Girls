import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubViewProfileComponent } from './sub-view-profile.component';

describe('SubViewProfileComponent', () => {
  let component: SubViewProfileComponent;
  let fixture: ComponentFixture<SubViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
