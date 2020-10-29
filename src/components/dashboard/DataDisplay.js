import React from "react"
import ReactHtmlParser from "react-html-parser"

const DataDisplay = (props) => {

    return ReactHtmlParser(props.data)
}

export default DataDisplay