import { makeAutoObservable } from 'mobx';

class Users {
  userList: {
    id?: number;
    email?: string;
    password?: string;
    banned?: boolean;
    banReason?: string;
    createdAt?: string;
    updateAt?: string;
  }[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchGetAllUsers() {
    console.log('all users');
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((json) => (this.userList = json));
  }
}

export default new Users();
