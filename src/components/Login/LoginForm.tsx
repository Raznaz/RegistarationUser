import React from 'react';

function LoginForm() {
  return (
    <div>
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
          <button className='btn green'>Registration</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
