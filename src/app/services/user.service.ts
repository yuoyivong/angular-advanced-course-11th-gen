import { Injectable } from '@angular/core';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  userList: IUser[] = [
    {
      id: 1,
      firstName: 'Leann',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      phoneNumber: '010-692-6593',
    },
    {
      id: 2,
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      phoneNumber: '077-123-4447',
    },
    {
      id: 3,
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      phoneNumber: '093-170-9623',
    },
  ];
}
