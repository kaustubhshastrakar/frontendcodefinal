import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.scss']
})
export class HrFormComponent implements OnInit {
  hr: any = {}; // Initialize hr as an empty object
  id!: number;

  constructor(
    private hrService: HrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.queryParamMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      this.loadHRDetails();
    }
  }

  loadHRDetails() {
    this.hrService.getHRById(this.id).subscribe(data => {
      this.hr = data;
    });
  }

  saveHR() {
    if (this.id) {
      this.hrService.updateHR(this.hr).subscribe(() => {
        this.router.navigate(['/hr-details', this.id]);
      });
    } else {
      this.hrService.createHR(this.hr).subscribe(() => {
        this.router.navigate(['/hr-list']);
      });
    }
  }
}
