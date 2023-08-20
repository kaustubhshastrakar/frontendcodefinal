import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateSkillsComponent } from './associate-skills.component';

describe('AssociateSkillsComponent', () => {
  let component: AssociateSkillsComponent;
  let fixture: ComponentFixture<AssociateSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateSkillsComponent]
    });
    fixture = TestBed.createComponent(AssociateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
