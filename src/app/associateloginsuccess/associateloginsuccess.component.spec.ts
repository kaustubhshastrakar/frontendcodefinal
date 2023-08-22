import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateloginsuccessComponent } from './associateloginsuccess.component';

describe('AssociateloginsuccessComponent', () => {
  let component: AssociateloginsuccessComponent;
  let fixture: ComponentFixture<AssociateloginsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateloginsuccessComponent]
    });
    fixture = TestBed.createComponent(AssociateloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
