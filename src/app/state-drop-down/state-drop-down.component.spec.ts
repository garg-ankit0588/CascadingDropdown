import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDropDownComponent } from './state-drop-down.component';

describe('StateDropDownComponent', () => {
  let component: StateDropDownComponent;
  let fixture: ComponentFixture<StateDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
