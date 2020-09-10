import React from "react"
import ChildContainer from "./ChildContainer"
import Sidebar from "./Sidebar"
import "./dashboard.css"

const ParentContainer = () => {

    return(
        <div className="parent-container">
            <Sidebar />
            <ChildContainer />
        </div>
    )

}

export default ParentContainer;