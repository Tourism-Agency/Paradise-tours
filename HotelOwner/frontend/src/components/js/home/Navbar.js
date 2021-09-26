import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useLocation } from 'react-router-dom';
import '../../css/home/Navbar.css';

function Navbar() {
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

  const location =useLocation();

  const isCurrentURL = (url) =>{
    return location.pathname.toLowerCase() === url.toLowerCase();
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h4>Paradise Lanka Tours</h4> 
            <img src='logo.jpg' width='80' />
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
                to='/before-packages'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Packages
              </Link>
            </li>

            <li>
              {!isCurrentURL('/packages') && !isCurrentURL('/payment-first') && !isCurrentURL('/payment') && !isCurrentURL('/package-details') && !isCurrentURL('/maps')
              && !isCurrentURL('/manage_vehicle_details') && !isCurrentURL('/transport_owner_profile') && !isCurrentURL('/transport_owner_edit_profile') 
              && !isCurrentURL('/location-of-package') && !isCurrentURL('/hotel-details-of-packageone') && !isCurrentURL('/request') 
              && !isCurrentURL('/count_pasenger') && !isCurrentURL('/cus-profile') && !isCurrentURL('/edit_profile') && !isCurrentURL('/favourites') 
              && !isCurrentURL('/rolepage') && !isCurrentURL('/transport_owner_booked_date') && !isCurrentURL('/transport_owner_add_account details') 
              && !isCurrentURL('/transport_owner_manage_bank_details') && !isCurrentURL('/transport_owner_all_details') && !isCurrentURL('/guide-profile') 
              && !isCurrentURL('/hotel_owner_profile')  && !isCurrentURL('/hotel_food_details') && !isCurrentURL('/hotel_room_details') && !isCurrentURL('/hotel_owner_add_account_details') 
              && !isCurrentURL('/admin-profile') && !isCurrentURL('/admin_editprofile') && !isCurrentURL('/admin_assignguide') && !isCurrentURL('/bookings/pending_bookings') 
              && !isCurrentURL('/bookings/current_bookings') && !isCurrentURL('/bookings/rejected_bookings') && !isCurrentURL('/bookings/booking_history') 
              && !isCurrentURL('/managepackages/manage_package') && !isCurrentURL('/package_details_two') && !isCurrentURL('/package_details_three') 
              && !isCurrentURL('/package_details_four') && !isCurrentURL('/package_two_location') && !isCurrentURL('/package_three_location') && !isCurrentURL('/package_four_location') 
              && !isCurrentURL('/package_map_two') && !isCurrentURL('/package_map_three') && !isCurrentURL('/package_map_four') && !isCurrentURL('/package_four_hotel_details') && !isCurrentURL('/hotel_charge') && !isCurrentURL('/hotel_owner_all_details')
              && !isCurrentURL('/hotel_owner_booking')?
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> :
              <Link
              to='/cus-profile' //this should be change according to user roles
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Go To Profile
            </Link>
              }
            </li>

             <li>
             {!isCurrentURL('/packages') && !isCurrentURL('/payment-first') && !isCurrentURL('/payment') && !isCurrentURL('/package-details') && !isCurrentURL('/maps')
              && !isCurrentURL('/manage_vehicle_details') && !isCurrentURL('/transport_owner_profile') && !isCurrentURL('/transport_owner_edit_profile') 
              && !isCurrentURL('/location-of-package') && !isCurrentURL('/hotel-details-of-packageone') && !isCurrentURL('/request') 
              && !isCurrentURL('/count_pasenger') && !isCurrentURL('/cus-profile') && !isCurrentURL('/edit_profile') && !isCurrentURL('/favourites') 
              && !isCurrentURL('/rolepage') && !isCurrentURL('/transport_owner_booked_date') && !isCurrentURL('/transport_owner_add_account details') 
              && !isCurrentURL('/transport_owner_manage_bank_details') && !isCurrentURL('/transport_owner_all_details') && !isCurrentURL('/guide-profile') 
              && !isCurrentURL('/hotel_owner_profile')  && !isCurrentURL('/hotel_food_details') && !isCurrentURL('/hotel_room_details') && !isCurrentURL('/hotel_owner_add_account_details') 
              && !isCurrentURL('/admin-profile') && !isCurrentURL('/admin_editprofile') && !isCurrentURL('/admin_assignguide') && !isCurrentURL('/bookings/pending_bookings') 
              && !isCurrentURL('/bookings/current_bookings') && !isCurrentURL('/bookings/rejected_bookings') && !isCurrentURL('/bookings/booking_history') 
              && !isCurrentURL('/managepackages/manage_package') && !isCurrentURL('/package_details_two') && !isCurrentURL('/package_details_three') 
              && !isCurrentURL('/package_details_four') && !isCurrentURL('/package_two_location') && !isCurrentURL('/package_three_location') && !isCurrentURL('/package_four_location') 
              && !isCurrentURL('/package_map_two') && !isCurrentURL('/package_map_three') && !isCurrentURL('/package_map_four') && !isCurrentURL('/package_four_hotel_details') && !isCurrentURL('/hotel_charge') && !isCurrentURL('/hotel_owner_all_details')
              && !isCurrentURL('/hotel_owner_booking')?
              <Link
                to='/sign-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>:
                <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LogOut
              </Link>
             }
            </li>
          </ul>
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;