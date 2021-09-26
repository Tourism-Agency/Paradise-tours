import React, { Component } from "react";
import ReactPlayer from "react-player";
import '../../../css/home/card item page.css';

class Pristine extends Component{
    render(){
        return(
   <div>
   <div class="card-wrapper">
    <div class="card-inner">
    <h2>Pristine</h2>
   <div class="video">
   <ReactPlayer
url="https://www.youtube.com/watch?v=FjSX4Eqtbjk&ab_channel=SriLankaTourism"
/>  
   </div>  
   <p>With nearly 1600 km of of palm fringed Coastline baked to perfection surrounding the country Sri Lanka is the ideal destination for beach bums worldwide.  
       May it be windsurfing, kayaking, yachting, water skiing, scuba diving or jut lazing around for the perfect tan, Sri Lanka offers it all.</p>
    
    <p>The two monsoon winds providing rain to the two corners of the country at various periods, makes Sri Lanka’s beach holiday a year round prospect. 
        The north east winds make the south western coast sunny and the sea calm from November to March. 
        The South West winds make the East Coast waters quiet with the constant sun shine happily in agreement. </p>

    <p>The best of the Southern beaches include Tangalla, Beruwala, Mirissa, Bentota and Unawatuna with varying options including chic boutique hotels, glowing coral reefs, gentle sandbars and undiscovered corners of paradise.</p>

    <p>Although Sri Lanka’s southern beaches has been long discovered by the international traveller the east coast is yet to be fully discovered. The most known among the Eastern beaches is the Arugam Bay, the high church of surfing enthusiasts’ in the region. 
        Once a mere rumour, Uppuveli beach is also open to the sun seekers after a three decade long civil war.</p>

    <p>On the Western corner of the country to the north of Colombo is the Negambo lagoon. Its beaches, an old favourite with local and foreign visitors and lagoon famed for lobster harvesting. 
        Despite having a ring of sandy beaches surrounding the country, Galle Face Green, a half a kilometre stretch between Galle Road and Indian Ocean is the playground of the Colombians.</p>
        </div>
    </div>
   </div>
        );
        }    
}

export default Pristine;