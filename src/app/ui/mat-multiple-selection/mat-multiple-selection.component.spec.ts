import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMultipleSelectionComponent } from './mat-multiple-selection.component';

describe('MatMultipleSelectionComponent', () => {
  let component: MatMultipleSelectionComponent;
  let fixture: ComponentFixture<MatMultipleSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMultipleSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultipleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
