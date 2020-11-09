import React from "react"
import ReactHtmlParser from "react-html-parser"
import { useSelector } from "react-redux";
import {Route} from "react-router-dom"
import DataDisplay from "./DataDisplay"


const Categories = () => {
    const data = useSelector(state => state.index)

    return (
        <div>
            {ReactHtmlParser(data)}
        </div>
    )
}

export default Categories;