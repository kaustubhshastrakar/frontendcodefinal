import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills: any[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillsService.getAllSkills().subscribe(
      (response: any) => {
        this.skills = response; // Assuming the API returns an array of skills
      },
      error => {
        console.error('Error loading skills:', error);
      }
    );
  }
}
