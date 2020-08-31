import React from "react"
import FileDrop from "./components/onboarding/FileDrop"
import Login from "./components/onboarding/Login"
import {Route} from 'react-router-dom';
import "./App.css"
import Nav from "./components/dashboard/Nav"
import ParentContainer from "./components/dashboard/ParentContainer";

const App = () => {
    return(
        <div className='App'>
            <Route exact path="/" component ={Login} />
            <Route exact path="/" component ={FileDrop} />
            <Route exact path="/explorer" component ={Nav} />
            <Route exact path="/explorer" component ={ParentContainer} />
        </div>
    )
}

export default App;