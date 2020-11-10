import React, {useState} from "react"
import ReactHtmlParser from "react-html-parser"
import {useSelector} from "react-redux"

const DataDisplay = (props) => {
    const data = localStorage.getItem('userData')
    return ReactHtmlParser(data)
}

export default DataDisplay