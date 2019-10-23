import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleGroupComponent } from './select-multiple-group.component';

describe('SelectMultipleGroupComponent', () => {
  let component: SelectMultipleGroupComponent;
  let fixture: ComponentFixture<SelectMultipleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultipleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
