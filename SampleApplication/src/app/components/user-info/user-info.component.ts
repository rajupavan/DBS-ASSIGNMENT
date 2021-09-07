import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() usersData:any;
  @Output() editUserAction = new EventEmitter();
  @Output() deleteUserAction = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(data: any) {
    this.editUserAction.emit(data);
  }
  onDelete(data: any) {
    this.deleteUserAction.emit(data)
  }

}
