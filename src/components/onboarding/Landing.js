import React from "react"
import categoryScroll from "./media/category-scroll.mp4"
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import {Link} from "react-router-dom"
import {FaHandPointRight} from "react-icons/fa"
import thumbnail from "./media/thumbnail-fb.jpg"
import "./onboarding.css"

const Landing = (props) => {
    const renderTooltip = (props) => (
        <Tooltip className='skip-tooltip' {...props}>
          Already have your data?
        </Tooltip>
      );

    return (
        <div className="landing">
            <h1 className="logo" >fbexplorer</h1>

            <div className="description">
                <p>fbexplorer lets you reclaim, search, and explore all of your Facebook data</p>
                <video src={categoryScroll} poster={thumbnail} className="description-video" playsinline preload="auto" muted autoplay="true" loop/>
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
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltip}
                        >
                            <Link to='/drop' className="skip-button">Skip</Link>
                        </OverlayTrigger>
                    </div>
                    <Link to='/download' className='next'>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing