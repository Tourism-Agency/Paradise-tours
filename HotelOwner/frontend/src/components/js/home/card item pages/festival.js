import React, { Component } from "react";
import ReactPlayer from "react-player";
import '../../../css/home/card item page.css';

class Festival extends Component{
    render(){
        return(
   <div>
    <div class="card-wrapper">
    <div class="card-inner">  
   <h2>Festival</h2>
   <div class="video">
   <ReactPlayer
    url="https://www.youtube.com/watch?v=HkUnU8pnRYc&ab_channel=SriLankaTourism"
   />
   </div>
   <p>With a population composed with many a races and religions, Sri Lanka is never short of festivals and celebrations. 
      Every month brings a celebration either religious or cultural importance, making Sri Lanka one of the countries with highest number of celebrations and holidays.</p>

    <p>The Sinhala-Tamil New year festival in April is the most important cultural festival in the country. The festival marks the beginning of the New Year and the end of harvesting season. 
        A lengthy holiday and a table full of oily traditional delicacies like kokis, makes the New Year festival one of the long awaited festivals in the country.</p>

    <p>The May full moon poya day or Vesak is the most important religious celebration in Sri Lanka, where Buddhists celebrate the nativity, enlightenment and passing away of Lord Buddha with many celebrations. 
        Sri Lankans of every religion crowd the roads to enjoy Vesak decorations including pandals and lanterns and many a makeshift alm houses that line the roads offering every food item from beverages, dessert to main meals.</p> 

    <p>In August are the Esala festivals in Kandy and Kataragama. The Kataragama Esala Festival is a multi-religious festival where devotes use fire walking and extreme self-penance to shows their piety to Lord Kataragama. 
        The Kandy Esala Perahera or the Dalanda Perahera is the largest cultural parade in the world and showcases the best of Sri Lankan dancing and music and the best of the domesticated tuskers in the country.</p> 
   
   </div> 
   </div> 
   </div>
        );
        }    
}

export default Festival;