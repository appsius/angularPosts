import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Appsius",
        lastName: "Webber",
        email: "appsia@yahoo.com",
        isActive: true,
        registered: new Date("03/03/2019 09:20:20"),
        hide: true
      },
      {
        firstName: "Mehmed",
        lastName: "Mallay",
        email: "ilyas@gmail.com",
        isActive: false,
        registered: new Date("11/11/2009 15:40:23"),
        hide: true
      },
      {
        firstName: "Molla",
        lastName: "Tahir",
        email: "tahir@boun.edu.tr",
        isActive: true,
        registered: new Date("11/10/2012 07:30:55"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      
      setTimeout(() => {
        observer.next({name: "Appsisus"});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
