import React from 'react';
import PageLink from './PageLink';
import SocilMedia from './SocilMedia';
function Footer() {
  return (
    <footer className='section footer'>
      <PageLink parent={'footer-links'} child={'footer-link'} />
      <SocilMedia parent={'footer-icons'} child={'footer-icon'} />
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
