import React from "react"
import parse from 'html-react-parser';
import { useSelector } from "react-redux";
import test from "./messenger.html"

const DataDisplay = () => {
    const data = useSelector(state => state.active_data_type)
    const activeData = Object.keys(data)[0]
    return (
        <div>
            {
                // parse(`${activeData}`)
            }
        </div>
    )
}

export default DataDisplay