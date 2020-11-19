import React, {useState} from "react";
import {useSelector} from "react-redux"
import "./onboarding.css"

const Login = () => {

    return(
        <div className="Login">
          <h3>1: Login to Facebook</h3>
            <div  id="fb-login"
            className="fb-login-button" 
            scope="public_profile"
            data-width="" 
            data-size="large" 
            data-button-type="login_with" 
            data-auto-logout-link="false" 
            data-use-continue-as="false">
          </div>
          <br/>
          <div className="login-info">
            <h3>2: Download your Facebook data by clicking the button below (choose HTML format)</h3>
            <a className='download-button' href="https://www.facebook.com/dyi/?x=AdkadZSUMBkpk0EF&referrer=yfi_settings" target="_blank" rel="noopener noreferrer">Download Data</a>
          </div>
        </div>
    )
}

export default Login