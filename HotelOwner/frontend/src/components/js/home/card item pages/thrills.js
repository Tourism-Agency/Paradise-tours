import React, { Component } from "react";
import ReactPlayer from "react-player";
import '../../../css/home/card item page.css';

class Thrills extends Component{
    render(){
        return(
   <div>
     <div class="card-wrapper">
    <div class="card-inner">  
   <h2>Thrills</h2>
   <div class="video">
   <ReactPlayer
url="https://www.youtube.com/watch?v=bR5KGYldYtc&ab_channel=SriLankaTourism"
/>  
   </div>
   <p>With varying climates and Geography packed into a small island Sri Lanka offers a range of adventures from the top of the mountains to the depths of the oceans.</p>
   
   <p> Other than taking a dip in the oceans or snorkelling, scuba diving and surfing are the most popular beach sports in the country. 
      Scuba diving has long history in the country. Today the oceans filled with coral gardens, multitude of exotic fishes and ancient wrecks Sri Lanka offers one of the best diving experiences in the world. 
      Although comparatively new to the country surfing too has made its mark in the Southern and Eastern coasts of the island for the last twenty five years. 
      The sea around Sri Lanka is also one of the most challenging marine game fishing locations while white water rafting, Kayaking and canoeing are some of the relatively new water sports practiced in the country.</p>

    <p>With multitude of roads winding through expanding mountains, lush green forests, paddy fields, parks and sleepy villages, Sri Lanka also offers many opportunities to keen hikers and trekkers. 
      Trail blazing through the tracks and paths on horse or elephant back too is a novel experience introduced recently.</p>
      
    <p>Experience the thrills of crumbling rocks beneath the feet, head spinning heights and the earth expanding beneath when conquering many mountains of Sri Lanka or take over waterfall climbing with exciting climbs like the rock face of Bambarakanda waterfall, 
      the tallest in the country.</p>
      
    <p>With many an adventures packed within few miles of each other Sri Lanka is an adventure itself waiting to happen.</p>
    </div>
    </div>
   </div>
        );
        }    
}

export default Thrills;