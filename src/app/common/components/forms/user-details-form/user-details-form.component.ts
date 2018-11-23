import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user';

@Component({
  selector: 'user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent {

  constructor() {}

  model = new User();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new User();
  }

}
