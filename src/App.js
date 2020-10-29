import React from "react"
import FileDrop from "./components/onboarding/FileDrop"
import Login from "./components/onboarding/Login"
import {Route} from 'react-router-dom';
import "./App.css"
import DataCategories from "./components/dashboard/DataCategories"
import DataCategory from "./components/dashboard/DataCategory"
import Categories from "./components/dashboard/Categories"

const App = () => {
    return(
        <div className='App'>
            <Route exact path="/" component ={Login} />
            <Route exact path="/" component ={FileDrop} />
            <Route exact path="/categories" component ={Categories} />
            <Route exact path='/display' component={DataCategory} />
        </div>
    )
}

export default App;