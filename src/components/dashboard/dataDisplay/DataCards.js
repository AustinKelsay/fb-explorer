import React from "react"
import { Dropdown } from 'react-bootstrap';
import ImageData from "./ImageData";
import InfiniteScroll from "react-infinite-scroll-component"
import {DropdownDataParser} from "./DropdownDataParser"
import "./dataDisplay.css"

const DataCards = (props) => {
    console.log(props)
    return(
        <div key={Date.now()} className="data-cards">
            <h5>{props.mk ? props.mk : null}</h5>
            <h5>{props.k ? props.k : null}</h5>
            <h2>{(typeof props.value === 'string' || typeof props.value === 'number') ? props.value : (props.value.name || props.value.title)}</h2>
            {
                props.value.hasOwnProperty("uri") 
                ?
                <ImageData uri={props.value} />
                :
                null
            }
                {
                typeof(props.value) == "object"
                ?
                    <div className="data-cards-expanded">
                        <label>{props.value.length}</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown">
                            Open
                            </Dropdown.Toggle>
                                                                
                            <Dropdown.Menu>
                                {DropdownDataParser(props.value)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                : null
                }
        </div>
    )
}

export default DataCards;