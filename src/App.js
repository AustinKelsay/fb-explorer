import React from "react"
import FileDrop from "./components/onboarding/FileDrop"
import Login from "./components/onboarding/Login"
import "./App.css"

const App = () => {
    return(
        <div className='App'>
            <Login />
            <FileDrop />
        </div>
    )
}

export default App;