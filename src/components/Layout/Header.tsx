import React from 'react';

function Header() {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <a href='!#' className='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Registaration</a>
            </li>
            <li>
              <a href='badges.html'>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
