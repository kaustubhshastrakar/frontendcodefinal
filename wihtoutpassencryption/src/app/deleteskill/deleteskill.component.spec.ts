import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteskillComponent } from './deleteskill.component';

describe('DeleteskillComponent', () => {
  let component: DeleteskillComponent;
  let fixture: ComponentFixture<DeleteskillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteskillComponent]
    });
    fixture = TestBed.createComponent(DeleteskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
