import React, { useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../../css/footer static pages/feedback.css';
import Axios from "axios";

export default function Feedback(){
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const sentFeedback=() => {
    Axios.post("http://localhost:5000/createFeedback",{
     firstname: firstname,
     lastname: lastname,
     summary: summary,
     description: description,
    }).then((response) => {
      console.log(response);
    });
  };

       return(
        <div className="feedback-wrapper">
        <div className="feedback-inner">
          <form>
            <h2>Give Your Feedback</h2> 
           
            <div className="form-group">
             <label>First Name</label>
             <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Enter your first name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    />
            </div>
            <br/>

            <div className="form-group">
            <label>Last Name</label>
            <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Enter your second name" 
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    />
            </div>
             <br/>

            <div className="form-group">
                    <label>Your Feedback</label>
                    <input type="textfeedback"
                    //type="text" 
                    className="form-control" 
                    placeholder="Summary"
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                    />
                </div>
                <br/>
                
                <div className="form-group">
                    <label>Futher Details</label>
                    <textarea className="form-control" 
                    placeholder="Optionally add more details here..." 
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    />
                </div>
                <br/>

            <button type="submit" className="btn btn-primary btn-block" onClick={sentFeedback}>Submit</button>

          </form>
          </div>
          </div>
       );
   
}