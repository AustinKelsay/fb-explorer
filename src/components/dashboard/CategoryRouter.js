import React from "react"
import {Route} from 'react-router-dom';
import { useSelector } from "react-redux";

const CategoryRouter = () => {
    const files = useSelector(state => state.files)
    const categoryNames = useSelector(state => state.categories)

    return(
        <div>
        {
            categoryNames.map((category) => {
                
            })
        }
        </div>
    )
}

export default CategoryRouter;