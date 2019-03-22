import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './_services/user.service';
import { Observable } from 'rxjs';
import { User } from './_models/user.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService) {}

    users$: Observable<any>;
    userForEdit: User;

    @ViewChild('editModal') editModal: ModalDirective;

    userAdded(user: User) {
      this.userService.addUser(user).subscribe(data => {
        this.users$ = this.userService.getUsers();
      });
    }

    userDeleted(user: User) {
      this.userService.removeUser(user).subscribe(data => {
        this.users$ = this.userService.getUsers();
      });
    }

    userEdit(user: User) {
      this.userForEdit = user;
      this.editModal.show();
    }

    onEditUser(user: User) {
      console.log(user);
      this.userService.editUser(user).subscribe(data => {
        this.users$ = this.userService.getUsers();
      });
    }

    ngOnInit() {
       this.users$ = this.userService.getUsers();
    }

    closeModal() {
      this.editModal.hide();
    }
}
