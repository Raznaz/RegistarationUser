import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import AddUser from './components/User/AddUser';

import UserList from './components/User/UserList';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div className='container'>
      <Header />
      <RegistrationPage />
      <UserList />
      <hr />
      <AddUser />
    </div>
  );
}

export default App;
