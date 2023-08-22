import { Component } from '@angular/core';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-associate-details',
  templateUrl: './associate-details.component.html',
  styleUrls: ['./associate-details.component.scss']
})
export class AssociateDetailsComponent {
  associateId!: number;
  associateLastName!: string;
  associateData: any;
  searchResults: any[] = []; // Store search results here

  constructor(private associateService: AssociateService) {}

  getAssociateDetails() {
    // Fetch associate data based on the associateId
    this.associateService.getAssociateById(this.associateId)
      .subscribe((data: any) => {
        this.associateData = data;
      });
  }

  searchByLastName() {
    // Fetch associates by last name
    this.associateService.getAssociatesByLastName(this.associateLastName)
      .subscribe((data: any[]) => {
        this.searchResults = data;
      });
  }
}
