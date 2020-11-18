import React, {useState} from "react"
import parse from "html-react-parser"
import {useSelector} from "react-redux"

const DataDisplay = (props) => {
    const userData = useSelector(state => state.userData)
    console.log(userData)
    console.log(props.data)
    return parse(props.data)
}

export default DataDisplay