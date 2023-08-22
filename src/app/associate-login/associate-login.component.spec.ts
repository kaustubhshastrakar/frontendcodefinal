import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateLoginComponent } from './associate-login.component';

describe('AssociateLoginComponent', () => {
  let component: AssociateLoginComponent;
  let fixture: ComponentFixture<AssociateLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateLoginComponent]
    });
    fixture = TestBed.createComponent(AssociateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
