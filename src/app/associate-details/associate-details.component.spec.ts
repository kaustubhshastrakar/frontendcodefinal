import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateDetailsComponent } from './associate-details.component';

describe('AssociateDetailsComponent', () => {
  let component: AssociateDetailsComponent;
  let fixture: ComponentFixture<AssociateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateDetailsComponent]
    });
    fixture = TestBed.createComponent(AssociateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
