import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssociateComponent } from './delete-associate.component';

describe('DeleteAssociateComponent', () => {
  let component: DeleteAssociateComponent;
  let fixture: ComponentFixture<DeleteAssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAssociateComponent]
    });
    fixture = TestBed.createComponent(DeleteAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
