import React from "react"
import categoryScroll from "./media/category-scroll.mp4"

const Landing = () => {

    return (
        <div className="landing">
            <h1 className="logo" >fbexplorer</h1>

            <div className="description">
                <p>fbexplorer lets you reclaim, explore, and search all of your Facebook data</p>
                <video src={categoryScroll} className="description-video" preload="auto" muted autoplay='true' loop />
            </div>
        </div>
    )
}

export default Landing