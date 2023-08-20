// delete-associate.component.ts

import { Component } from '@angular/core';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-delete-associate',
  templateUrl: './delete-associate.component.html',
  styleUrls: ['./delete-associate.component.scss']
})
export class DeleteAssociateComponent {
  associateId: number | undefined; // Initialize the variable
  deletionError: string | null = null;

  constructor(private associateService: AssociateService) { }

  deleteAssociate(): void {
    if (!this.associateId) {
      this.deletionError = 'Please enter a valid Associate ID.';
      return;
    }

    if (confirm('Are you sure you want to delete this associate?')) {
      this.associateService.deleteAssociate(this.associateId).subscribe(
        () => {
          console.log('Associate deleted successfully.');
          this.deletionError = null;
        },
        (error) => {
          console.error('Error deleting associate:', error);
          this.deletionError = 'An error occurred while deleting the associate. Please try again later.';
        }
      );
    }
  }
}
