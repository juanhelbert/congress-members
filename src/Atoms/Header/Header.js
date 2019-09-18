import React from 'react';
import Link from 'react-router-dom/Link';
import './Header.scss';

const Header = () => (
  <header>
    <div className='container'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/detailed-view'>Detailed view</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;