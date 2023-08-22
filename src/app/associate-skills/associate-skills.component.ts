import { Component } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-associate-skills',
  templateUrl: './associate-skills.component.html',
})
export class AssociateSkillsComponent {
  associateId!: number;
  skillId!: number;
  certification!: string;
  duration!: string;
  startDate!: string;
  endDate!: string;
  experience!: string;
  rating!: string;

  constructor(private skillsService: SkillsService) {}

  onSaveAssociateSkill() {
    // Create a data object to send to your API
    const data = {
      aid: { associateId: this.associateId }, // Associate ID should be automatically populated
      certification: this.certification,
      duration: this.duration,
      startDate: this.startDate,
      endDate: this.endDate,
      experience: this.experience,
      rating: this.rating,
      sid: { skillId: this.skillId },
    };

    // Call your API to save the associate skill
    this.skillsService.saveAssociateSkill(this.associateId, this.skillId, data).subscribe(
      () => {
        console.log('Associate skill saved successfully.');
        // Handle success, e.g., show a success message or navigate to another page
      },
      (error) => {
        console.error('Error saving associate skill:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
}
