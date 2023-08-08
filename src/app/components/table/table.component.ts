import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  userInfo: IUser[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo = this.userService.userList;
  }

  
}
