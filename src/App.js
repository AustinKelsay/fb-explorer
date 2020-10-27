import React from "react"
import FileDrop from "./components/onboarding/FileDrop"
import Login from "./components/onboarding/Login"
import {Route} from 'react-router-dom';
import "./App.css"
import DataCategories from "./components/dashboard/DataCategories"
import DataDisplay from "./components/dashboard/DataCategory"

const App = () => {
    return(
        <div className='App'>
            <Route exact path="/" component ={Login} />
            <Route exact path="/" component ={FileDrop} />
            <Route exact path="/categories" component ={DataCategories} />
            <Route exact path='/display' component={DataDisplay} />
        </div>
    )
}

export default App;