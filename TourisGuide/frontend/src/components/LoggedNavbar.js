import React, { useState, useEffect } from 'react';
//import { Button } from './LoggedButton';
import { Link } from 'react-router-dom';
import './NavBar.css';

function LoggedNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src='logo.jpeg' width='80' />
            <h4>Paradise Lanka Tours</h4> 
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/packages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Packages
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Go To Profile
              </Link>
            </li>

             <li>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LogOut
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default LoggedNavbar;