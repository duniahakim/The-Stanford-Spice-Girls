import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolchatComponent } from './schoolchat.component';

describe('SchoolchatComponent', () => {
  let component: SchoolchatComponent;
  let fixture: ComponentFixture<SchoolchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
