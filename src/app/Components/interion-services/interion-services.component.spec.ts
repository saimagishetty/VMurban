import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterionServicesComponent } from './interion-services.component';

describe('InterionServicesComponent', () => {
  let component: InterionServicesComponent;
  let fixture: ComponentFixture<InterionServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterionServicesComponent]
    });
    fixture = TestBed.createComponent(InterionServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
