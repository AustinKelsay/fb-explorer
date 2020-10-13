import React from "react"
import parse from 'html-react-parser';
import { useSelector } from "react-redux";

const DataDisplay = () => {
    const data = useSelector(state => state.active_data_type)
    return (
        <div>
            {
                parse(data)
            }
        </div>
    )
}

export default DataDisplay