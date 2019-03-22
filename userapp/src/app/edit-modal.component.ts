import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from './_models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor() { }

  @Output() editModalOut = new EventEmitter();
  @Output() userOut = new EventEmitter();
  @Input() user: User;
  isFormInValid = false;

  ngOnInit() {
  }

  closeModal() {
    this.editModalOut.emit(true);
  }

  onSubmit(editForm: NgForm) {
    if (!editForm.valid) {
      this.isFormInValid = true;
   } else {
     this.isFormInValid = false;
     this.userOut.emit(editForm.value);
     editForm.reset();
     this.editModalOut.emit(true);
   }
  }

}
