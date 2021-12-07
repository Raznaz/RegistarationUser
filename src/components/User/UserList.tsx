import React from 'react';
import users from '../../store/users';
import { observer } from 'mobx-react-lite';

const UserList = observer(() => {
  return (
    <div>
      {users.userList.map((user) => (
        <div key={user.id}>
          <span>{user.id}</span>
          <span>{user.email}</span>
          <span>{user.password}</span>
        </div>
      ))}
      <button className='btn red' onClick={() => users.fetchGetAllUsers()}>
        Show
      </button>
    </div>
  );
});

export default UserList;
