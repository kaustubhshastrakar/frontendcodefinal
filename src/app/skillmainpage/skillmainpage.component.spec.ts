import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmainpageComponent } from './skillmainpage.component';

describe('SkillmainpageComponent', () => {
  let component: SkillmainpageComponent;
  let fixture: ComponentFixture<SkillmainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillmainpageComponent]
    });
    fixture = TestBed.createComponent(SkillmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
