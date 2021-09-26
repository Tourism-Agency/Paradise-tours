import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import '../css/signup.css';


/*export default class SignUp extends Component {


    render() {
        return (
            <div className="Z">
                <br></br><br></br><br></br>
            <div className="container">
            <div className="hero-box">
                <label htmlFor=""><h2>Select Account Type</h2></label>
                <div className="btn-container">
                    
                    <button onclick="">Customer Account </button>
                    <button onclick="">Hotel Owner Account</button>
                    <button onclick="">Guide Account</button>
                    <button onclick="">Transport Owner Account</button>
                  
        
                </div>
            </div>
        </div>
        </div>

        );
    }
   
}*/

function SignUp(){
    const history = useHistory();

    function customerAccount(){
        history.push('/cus-signup');
    }
    
    function hotelOwnerAccount(){
        history.push('/hotelowner-signup');
    }

    function guideAccount(){
        history.push('guide-signup');
    }

    function transportownerAccount(){
        history.push('/transportowner-signup');
    }

    return(
        <div className="Z">
        <br></br><br></br><br></br>
    <div className="container">
    <div className="hero-box">
        <label htmlFor=""><h2>Select Account Type</h2></label>
        <div className="btn-container">
            
            <button onClick={customerAccount}>Customer Account </button>
            <button onClick={hotelOwnerAccount}>Hotel Owner Account</button>
            <button onClick={guideAccount}>Guide Account</button>
            <button onClick={transportownerAccount}>Transport Owner Account</button>
          

        </div>
    </div>
</div>
</div>
    );
}

export default SignUp;