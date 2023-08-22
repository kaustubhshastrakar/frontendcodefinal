import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssociateService } from '../associate.service';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent implements OnInit {

  associateForm: FormGroup;

  constructor(private fb: FormBuilder, private associateService: AssociateService) {
    this.associateForm = this.fb.group({
      associateFirstName: ['', Validators.required],
      associateLastName: ['', Validators.required],
      associateEmail: ['', [Validators.required, Validators.email]],
      associateMobile: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSaveAssociate() {
    if (this.associateForm.valid) {
      const associateData = this.associateForm.value;
      this.associateService.saveAssociate(associateData).subscribe(
        response => {
          console.log('Associate saved successfully', response);
          
        },
        error => {
          console.error('Error saving associate', error);
        }
      );
    }
  }

}
