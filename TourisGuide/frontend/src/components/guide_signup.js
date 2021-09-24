import React, { Component } from "react";
import './authentication.css';
import validate from './validateInfo';
import useForm from "./useForm";
import { Link } from "react-router-dom";

const GuideSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    ); 
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={handleSubmit} noValidate>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="firstname"
                    placeholder="Enter your first name" 
                    value={values.firstname}
                    onChange={handleChange}
                    />
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" 
                    className="form-control"
                    name="lastname" 
                    placeholder="Enter your last name" 
                    value={values.lastname}
                    onChange={handleChange}
                    />
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control"
                    name="email" 
                    placeholder="Enter your email address"
                    value={values.email}
                    onChange={handleChange} 
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Mobile number</label>
                    <input type="text" 
                    className="form-control"
                    name="mobille" 
                    placeholder="Enter your mobile number"
                    value={values.mobile}
                    onChange={handleChange} 
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                </div>

            

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" 
                    className="form-control"
                    name="username" 
                    placeholder="Enter your user name" 
                    value={values.username}
                    onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    name="password" 
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange} 
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                    type="confirmpassword" 
                    className="form-control"
                    name="confirmpassword" 
                    placeholder="Confirm your password"
                    value={values.confirmpassword}
                    onChange={handleChange} 
                    />
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                </div>
<br></br>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/sign-in'>login?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    
}

export default GuideSignup;

/*
    <div className="form-group">
                    <label>Address</label>
                    <input type="text" 
                    className="form-control"
                    name="address" 
                    placeholder="Enter your home address"
                    value={values.address}
                    onChange={handleChange} 
                    />
                    {errors.address && <p>{errors.address}</p>}
                </div>
                */