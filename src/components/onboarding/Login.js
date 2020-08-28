import React, {useState} from "react";
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
            <h3>2: Download your Facebook data by clicking the button below (choose .json format)</h3>
            <a href="https://www.facebook.com/dyi/?x=AdkadZSUMBkpk0EF&referrer=yfi_settings" target="_blank">
                <button>Download Data</button>
            </a>
          </div>
        </div>
    )
}

export default Login