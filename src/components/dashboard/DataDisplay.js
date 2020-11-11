import React, {useState} from "react"
import ReactHtmlParser from "react-html-parser"
import {useSelector} from "react-redux"

const DataDisplay = (props) => {
    console.log(props.data)
    return ReactHtmlParser(props.data)
}

export default DataDisplay