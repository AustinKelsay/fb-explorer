import React from "react"
import ReactHtmlParser from "react-html-parser"
import { useSelector } from "react-redux";


const DataCategory = () => {
    // Fetch the entire active data category from the store
    const data = useSelector(state => state.active_data_type)
    // Use Object.keys to destrcture out the dynamic property associated with the retrived data
    const dataKey = Object.keys(data)[0]
    // Assgin a final variable that picks the dynamic property out of state.active_data_type
    const activeData = data[dataKey]
    console.log(activeData)

    return (
        <div>
            {
                Object.entries(activeData).map((value, key) => {
                    console.log(value)
                    return(
                        <p>{value[0]}</p>
                    )
                    //return ReactHtmlParser(JSON.parse(value[1]))
                })
            }
        </div>
    )
}

export default DataCategory;