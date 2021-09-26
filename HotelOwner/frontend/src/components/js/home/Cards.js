import React from 'react';
import '../../css/home/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Wild.jpg'
              text='Despite its small size Sri Lanka boasts of one of the highest rates of biological endemism in the world whether in plants or animals and is included among the top five biodiversity hotspots in the world'
              label='Wild'
              path='/wild'
            />
            <CardItem
              src='images/Heritage.jpg'
              text='With a history expanding over 3000years, Sri Lanka holds some of world’s ancient cities including Anuradhapura, Polonnaruwa and Digamadulla'
              label='Heritage'
              path='/heritage'
            />
          
          <CardItem
              src='images/Scenic.jpg'
              text='Despite being a relatively small island, Sri Lanka is endowed with a diverse collection of landscapes, climates and natural features'
              label='Scenic'
              path='/scenic'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Thrills.jpg'
              text='With varying climates and Geography packed into a small island Sri Lanka offers a range of adventures from the top of the mountains to the depths of the oceans'
              label='Thrills'
              path='/thrills'
            />
            <CardItem
              src='images/Festival.jpg'
              text='With a population composed with many a races and religions, Sri Lanka is never short of festivals and celebrations'
              label='Festival'
              path='/festival'
            />
            <CardItem
              src='../../images/Pristine.jpg'
              text='With nearly 1600 km of of palm fringed Coastline baked to perfection surrounding the country Sri Lanka is the ideal destination for beach bums worldwide'
              label='Pristine'
              path='/pristine'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;