import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './_models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }
  @Output() userOutput = new EventEmitter<User>();
  isFormInValid = false;

  user = new User();

  ngOnInit() {
  }

  onSubmit(userForm: any) {
    if (!userForm.valid) {
       this.isFormInValid = true;
    } else {
      this.isFormInValid = false;
      this.userOutput.emit(userForm.value);
      userForm.reset();
    }
  }

}
