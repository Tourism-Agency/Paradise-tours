import React, { Component } from "react";
import '../../../css/home/card item page.css';

class Privacy extends Component{
    render(){
        return(
   <div>
     <div class="card-wrapper">
    <div class="card-inner" style={{background:'#fbfbfb'}}>  
   <h2>Privacy & Policy</h2>

   <p>(1).Information You Give Us: We receive and store any information you enter on this Web site or give us in any other way. You can choose not to provide certain information, but then you might not be able to take advantage of many of our features. We use the information that you provide for such purposes as responding to your requests, customizing future booking for you and communicating with you.</p><br></br>
   <p>(2).Automatic Information: We receive and store certain types of information whenever you interact with us. For example, like many Web sites, we use "cookies," and we obtain certain types of information when your Web browser accesses any of our websites or advertisements and other content served by or on behalf of us on other Web sites.</p><br></br>
   <p>(3).E-mail Communications: To help us make e-mails more useful and interesting, we often receive a confirmation when you open e-mail from us if your computer supports such capabilities. If you do not want to receive e-mail or other mail from us, you could use the unsubscribe option available in every mail we send.</p><br></br>
   <p>(4).Mobile Communications; We will use the contact numbers provided to ensure the booking process a success. However, the contact details will be used as a mode to communicate certain information which will be beneficial to improve your customer experience.</p><br></br>
   <p>(5).Third-Party Service Providers: We employ other companies and individuals to perform functions on our behalf.Example;processing credit card payments. They have access to personal information needed to perform their functions, but may not use it for other purposes.</p><br></br>   
    
    </div>
    </div>
   </div>
        );
        }    
}

export default Privacy;