import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterionSolutionsComponent } from './interion-solutions.component';

describe('InterionSolutionsComponent', () => {
  let component: InterionSolutionsComponent;
  let fixture: ComponentFixture<InterionSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterionSolutionsComponent]
    });
    fixture = TestBed.createComponent(InterionSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
