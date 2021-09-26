import React from 'react';
import '../../../css/home/Cards.css';
import CardItem from '../CardItem';

function Contacts() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='ContactImages/call.png'
              text='0912234567
              0771234567'
              label='Call'
            />
            <CardItem
              src='ContactImages/email.png'
              text='paradiselanka@gmail.com'
              label='Email'
            />
            <CardItem
              src='ContactImages/location.png'
              text='Colombo7,Sri Lanka.'
              label='Location'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacts;