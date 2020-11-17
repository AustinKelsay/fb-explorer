import React from "react"
import parse from "html-react-parser"
import { useSelector } from "react-redux";
import {Route} from "react-router-dom"
import DataDisplay from "./DataDisplay"


const Categories = () => {
    const data = useSelector(state => state.index)
    const categoryData = useSelector(state => state.categories)

    // categoryData.map((category) => {
    //   const path = "/" + category.path + "/" + category.name
    //   console.log(typeof(path), path)
    //   if (path == '/photos_and_videos/your_photos.html') {
    //     localStorage.setItem('userData', category.data)
    //   }
    // })

    

    return (
      parse(data)
    )
}

export default Categories;