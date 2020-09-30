import React from "react"
import Timestamp from "react-timestamp";
import { Dropdown } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ImageData from "./ImageData";

export const DropdownDataParser = (object) => { 
    return Object.entries(object).map(([key, value]) => {
            if (typeof value === 'object') {
                return (
                    <Dropdown key={uuidv4()}>
                        <Dropdown.Header>{`${key}:`}</Dropdown.Header>
                        {
                            (value.hasOwnProperty("uri"))
                            ?
                            <Dropdown.Item className="dropdown-photo">
                                <ImageData uri={value} />
                            </Dropdown.Item>
                            :
                            <Dropdown.Item as='div'>
                            { (typeof value === 'string' || typeof value === 'number') ? value : DropdownDataParser(value) }
                            </Dropdown.Item>
                        }
                        <Dropdown.Divider />
                    </Dropdown>
                )
            }
            else if (Array.isArray(value)) {
                return value.map((item) => {
                    return (
                        <Dropdown key={uuidv4()}>
                            <Dropdown.Header>{`${key}:`}</Dropdown.Header>
                            {
                                (item.hasOwnProperty("uri"))
                                ?
                                <Dropdown.Item className="dropdown-photo">
                                    <ImageData uri={value} />
                                </Dropdown.Item>
                                :
                                <Dropdown.Item>
                                    { (typeof item === 'number' && key.includes("timestamp")) 
                                    ? 
                                    <Timestamp date={item} /> 
                                    :
                                    (typeof item === 'string' || typeof item === 'number') ? item : DropdownDataParser(item) }
                                </Dropdown.Item>
                            }
                            <Dropdown.Divider />
                        </Dropdown>
                    )
                })
            }
            else return (
                <Dropdown key={uuidv4()}>
                    <Dropdown.Header>{`${key}:`}</Dropdown.Header>
                    {
                        (value.hasOwnProperty("uri"))
                        ?
                        <Dropdown.Item className="dropdown-photo">
                            <ImageData uri={value} />
                        </Dropdown.Item>
                        :
                        <Dropdown.Item>
                            {(typeof value === 'number' && key.includes("timestamp")) 
                            ?
                            <Timestamp date={value} />
                            :
                            ((typeof value === 'string' || typeof value === 'number') ? value : DropdownDataParser(value)) }
                        </Dropdown.Item>
                    }
                    <Dropdown.Divider />
                </Dropdown>
            )
    })}