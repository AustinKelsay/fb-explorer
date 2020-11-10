import React from "react"
import ReactHtmlParser from "react-html-parser"
import { useSelector } from "react-redux";
import {Route} from "react-router-dom"
import DataDisplay from "./DataDisplay"


const Categories = () => {
    const data = useSelector(state => state.index)
    const categoryData = useSelector(state => state.categories)

    categoryData.map((category) => {
      const path = "/" + category.path + "/" + category.name
      console.log(typeof(path), path)
      if (path == '/posts/your_posts_1.html') {
        localStorage.setItem('userData', category.data)
      }
    })

    return ReactHtmlParser(data)
}

export default Categories;