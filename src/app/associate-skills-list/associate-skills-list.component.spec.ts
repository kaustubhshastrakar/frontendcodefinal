import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateSkillsListComponent } from './associate-skills-list.component';

describe('AssociateSkillsListComponent', () => {
  let component: AssociateSkillsListComponent;
  let fixture: ComponentFixture<AssociateSkillsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateSkillsListComponent]
    });
    fixture = TestBed.createComponent(AssociateSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
