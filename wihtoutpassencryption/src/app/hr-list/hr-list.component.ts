import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-hr-list',
  templateUrl: './hr-list.component.html',
  styleUrls: ['./hr-list.component.scss']
})
export class HrListComponent implements OnInit {
  hrList: any[] = [];

  constructor(private hrService: HrService, private router: Router) { }

  ngOnInit(): void {
    this.loadHRList();
  }

  loadHRList() {
    this.hrService.getAllHR().subscribe(data => {
      this.hrList = data;
    });
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/hr-details', id]);
  }
}
