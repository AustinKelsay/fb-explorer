import React from "react"
import {Route} from 'react-router-dom';
import { useSelector } from "react-redux";
import DataDisplay from "./DataDisplay"

const CategoryRouter = () => {
    const categoryData = useSelector(state => state.categories)

    return(
        <div>
        {
            categoryData.map((category) => {
                console.log(typeof(category.name))
                console.log(typeof(category.path))
                return <Route path={category.path + '/' + category.name} render={(props) => <DataDisplay data={category.data} />} />
            })
        }
        </div>
    )
}

export default CategoryRouter;