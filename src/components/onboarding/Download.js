import React, {useState} from "react"
import fbDownload from "./media/fb-download.jpg"
import {Tooltip, OverlayTrigger, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom"
import {FaHandPointRight} from "react-icons/fa"

const Download = () => {

    const renderTooltip = (props) => (
        <Tooltip className='skip-tooltip' {...props}>
          Already have your data?
        </Tooltip>
      );

    return (
        <div className="landing">
            <h1 className="logo" >fbexplorer</h1>

            <div className="description">
                    <ListGroup.Item as="li" >You will be taken to the download page where you should see what looks like the below image</ListGroup.Item>
                    <img src={fbDownload} className="download-image" />
                    <ListGroup.Item as="li" >Choose "All of my data" and make sure the format is HTML with media quality set to high</ListGroup.Item>
                    <ListGroup.Item as="li" >It will take a few minutes to "create" your file before you can download</ListGroup.Item>
                    <ListGroup.Item as="li" >Once the file is downloaded you can keep it forever and explore it here anytime!</ListGroup.Item>
                <h3 className="step">Step 2: Download your Facebook data</h3>
                <a className='download-button' href="https://www.facebook.com/dyi/?x=AdkadZSUMBkpk0EF&referrer=yfi_settings" target="_blank" rel="noopener noreferrer">Download Data</a>
                <div className="button-container">
                    <div className="skip-container">
                        <FaHandPointRight className='icon-hand-point' />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 100, hide: 200 }}
                            overlay={renderTooltip}
                        >
                            <Link to='/drop' className="icon-text">Skip</Link>
                        </OverlayTrigger>
                    </div>
                    <Link to='/download' className='next'>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Download