import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.scss']
})
export class HrDetailsComponent implements OnInit {
  hr: any;
  id!: number;

  constructor(
    private hrService: HrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadHRDetails();
  }

  loadHRDetails() {
    this.hrService.getHRById(this.id).subscribe(data => {
      this.hr = data;
    });
  }

  navigateToUpdate() {
    this.router.navigate(['/hr-form'], { queryParams: { id: this.id } });
  }

  deleteHR() {
    this.hrService.deleteHR(this.id).subscribe(
      () => {
        this.router.navigate(['/hr-list']);
      },
      (error) => {
        console.error('Error deleting HR:', error);
        // Handle the error, display an error message, or take appropriate action.
      }
    );
  }
}
