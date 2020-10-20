import React from "react"
import parse from 'html-react-parser';
import { useSelector } from "react-redux";


const DataDisplay = () => {
    const data = useSelector(state => state.active_data_type)
    const activeData = Object.keys(data)[0]
    console.log(data[activeData])
    return (
        <div>
            {
                Object.entries(data[activeData]).map((value, key) => {
                    console.log(key)
                    console.log(value[1])
                    parse(`${value[1]}`)
                })
            }
        </div>
    )
}

export default DataDisplay