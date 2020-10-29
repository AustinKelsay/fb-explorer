import React from "react"
import ReactHtmlParser from "react-html-parser"
import { useSelector } from "react-redux";


const Categories = () => {
    const data = useSelector(state => state.index)

    return ReactHtmlParser(data)
}

export default Categories;