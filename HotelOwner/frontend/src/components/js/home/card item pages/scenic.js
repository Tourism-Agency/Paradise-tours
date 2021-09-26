import React, { Component } from "react";
import ReactPlayer from "react-player";
import '../../../css/home/card item page.css';

class Scenic extends Component{
    render(){
        return(
   <div>
       <div class="card-wrapper">
    <div class="card-inner">  
   <h2>Scenic</h2>
   <div class="video">
   <ReactPlayer
url="https://www.youtube.com/watch?v=pmIuyIpm5ZQ&ab_channel=SriLankaTourism"
/> 
   </div>
   <p>Despite being a relatively small island, Sri Lanka is endowed with a diverse collection of landscapes, climates and natural features. 
       Sri Lanka’s infamous beaches have been enticing visitors for many years. However, the rest of the island harbours many more idyllic vistas.</p>

    <p>The central highlands are carpeted with emerald tea plantations interspersed with occasional waterfalls. 
        Cool climates, misty views, and quaint estate bungalows are a throwback to bygone eras.</p>

    <p>The cultural triangle in the centre of the island holds a certain magic, with ruins from several ancient kingdoms, majestic tanks, hidden rock caves, and ancient sacred temples, revealing the fascinating and almost unbelievable ancient architecture, art, and engineering.</p>

    <p>The North of Sri Lanka is a vibrant concoction of essences, with a unique flavour and culture. Despite still bearing the scars from the civil war, the north truly bears testament to the diversity and variation that comprises the island. Influences include Portuguese, Dutch, Tamil, Muslim, and British characters. 
        Chains of islands are scattered off the shoreline, with their own unique habitats, waiting to be explored.</p>

    <p>The east of the island is home to lush paddy fields, spectacular sunrises, and a quieter more rural pace of life. Colourful places of worship, national parks, ports and harbours, and pristine clear waters offer a mellow experience to any weary traveller.</p>   
    </div>
    </div>
   </div>
        );
        }    
}

export default Scenic;