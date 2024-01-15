import React from 'react';
import logo from '../images/logo.svg';
import PageLink from './PageLink';
import SocilMedia from './SocilMedia';
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLink parent={'nav-links'} child={'nav-link'} />
        <SocilMedia parent={'nav-icons'} child={'nav-icon'} />
      </div>
    </nav>
  );
}

export default Navbar;
