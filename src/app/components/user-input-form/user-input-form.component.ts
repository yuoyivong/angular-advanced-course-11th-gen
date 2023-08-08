import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css'],
})
export class UserInputFormComponent {
  constructor(private userForm: FormBuilder, private userService : UserService) {}

  userInputForm = this.userForm.group({
    id : [''],
    firstName: [''],
    lastName : [''],
    email : [''],
    phoneNumber : ['']
  });

  ngOnInit(): void {
    console.log(this.userInputForm)
  }

  handleSubmit() {
    console.log(this.userInputForm.controls.email.value)
   

  }

}
