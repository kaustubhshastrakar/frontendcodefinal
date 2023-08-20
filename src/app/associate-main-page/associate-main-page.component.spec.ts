import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateMainPageComponent } from './associate-main-page.component';

describe('AssociateMainPageComponent', () => {
  let component: AssociateMainPageComponent;
  let fixture: ComponentFixture<AssociateMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateMainPageComponent]
    });
    fixture = TestBed.createComponent(AssociateMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
