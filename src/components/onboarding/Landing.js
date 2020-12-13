import React from "react"
import categoryScroll from "./media/category-scroll.mp4"
import {FaHandPointRight} from "react-icons/fa"

const Landing = () => {

    return (
        <div className="landing">
            <h1 className="logo" >fbexplorer</h1>

            <div className="description">
                <p>fbexplorer lets you reclaim, explore, and search all of your Facebook data</p>
                <video src={categoryScroll} className="description-video" preload="auto" muted autoplay='true' loop />
                <h3 className="step">Step 1: Log into Facebook</h3>
                <div  id="fb-login"
                    className="fb-login-button" 
                    scope="public_profile"
                    data-width="" 
                    data-size="large" 
                    data-button-type="login_with" 
                    data-auto-logout-link="false" 
                    data-use-continue-as="false">
                </div>
                <div className="button-container">
                    <div className="skip-container">
                        <FaHandPointRight className='icon-hand-point' />
                        <a href="/drop" className="icon-text">Already have your data</a>
                    </div>
                    <button className='next'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Landing