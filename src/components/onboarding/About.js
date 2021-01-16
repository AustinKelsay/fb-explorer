import React from "react"
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import {Link} from "react-router-dom"
import {FaHandPointRight} from "react-icons/fa"
import categoryScroll from "./media/category-scroll.mp4"
import thumbnail from "./media/thumbnail-fb.jpg"
import "./onboarding.css"

const About = () => {

    return (
        <div className="landing">
            <div className="header">
                <h1 className="logo" >fbexplorer</h1>
                <p className="about">About</p>
            </div>

            <div className="landing-container">
                <h3>fbexplorer lets you reclaim, search, and explore all of your Facebook data</h3>
                
                <Link to='/' className='next'>Home</Link>
            </div>
        </div>
    )
}

export default About