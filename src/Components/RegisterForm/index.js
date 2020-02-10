import React from 'react';
import './index.css';

const RegisterForm = () => {

    return (
        <div className="loginForm"> 
            <hgroup>
                <h1>React MaterialUI</h1>
                <h2>Sign up</h2>
            </hgroup>
            <form>
                <div className="group">
                    <input type="email" className="used"/><span className="highlight"></span><span className="bar"></span>
                    <label>Email</label>
                </div>
                <div className="group">
                    <input type="password" className="used"/><span className="highlight"></span><span className="bar"></span>
                    <label>Password</label>
                </div>
                <div className="group">
                    <input type="password" className="used"/><span className="highlight"></span><span className="bar"></span>
                    <label>Confirm Password</label>
                </div>
                <button onClick={() => console.log('send')} type="button" className="buttonui "> <span> Login </span>
                    <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
                </button>    
            </form>
        </div>
    );
};

export default RegisterForm;