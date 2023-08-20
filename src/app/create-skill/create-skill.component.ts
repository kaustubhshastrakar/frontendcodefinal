import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsService } from '../skills.service';
import { SkillsInfo } from '../skills-info';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss']
})
export class CreateSkillComponent implements OnInit {
  skillForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private skillsService: SkillsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      skillName: ['', Validators.required],
      skillCategory: ['', Validators.required]
    });
  }

  createSkill(): void {
    if (this.skillForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const skillInfo: SkillsInfo = {
        skillName: this.skillForm.value.skillName,
        skillCategory: this.skillForm.value.skillCategory
      };

      this.skillsService.saveSkills(skillInfo).subscribe(
        response => {
          console.log('Skill created:', response);
          // Add any additional handling, such as displaying a success message
          // or navigating to a different page
           // Navigate to the home page or other appropriate route
        },
        error => {
          console.error('Error creating skill:', error);
          // Handle the error, such as displaying an error message
          // Reset the submitting flag to allow resubmission
          this.isSubmitting = false;
        }
      );
    }
  }
}
