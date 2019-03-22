import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() users: any;
  @Output() deleEvtOut = new EventEmitter();
  @Output() editEvtOut = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
     console.log(changes.users.currentValue);
     this.users = changes.users.currentValue;
  }

  ngOnInit() {
    console.log(this.users);
  }

  editUser(user: any) {
    this.editEvtOut.emit(user);
  }

  deleteUser(user: any) {
    this.deleEvtOut.emit(user);
  }

}
