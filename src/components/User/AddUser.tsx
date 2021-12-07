import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import users from '../../store/users';

function AddUser() {
  return (
    <div>
      <h1>Add user</h1>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='email' type='email' className='validate' />
              <label htmlFor='email'>Email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input id='password' type='password' className='validate' />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <button className='btn green' onClick={() => users.addNewUser()}>
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}

export default observer(AddUser);
