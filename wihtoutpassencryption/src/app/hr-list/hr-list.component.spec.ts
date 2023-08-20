import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrListComponent } from './hr-list.component';

describe('HrListComponent', () => {
  let component: HrListComponent;
  let fixture: ComponentFixture<HrListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrListComponent]
    });
    fixture = TestBed.createComponent(HrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
