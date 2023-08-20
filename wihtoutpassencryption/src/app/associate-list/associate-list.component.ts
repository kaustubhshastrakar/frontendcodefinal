import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service'; // Import the service
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-associate-list',
  templateUrl: './associate-list.component.html',
  styleUrls: ['./associate-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AssociateListComponent implements OnInit {
  associates: any[] = [];

  constructor(private associateService: AssociateService) {} // Inject the service

  ngOnInit(): void {
    this.fetchAssociates();
  }

  fetchAssociates() {
    this.associateService.getAllAssociates().subscribe(
      (data: any[]) => {
        this.associates = data;
      },
      (error: any) => {
        console.error('Error fetching associates:', error);
      }
    );
  }
}
