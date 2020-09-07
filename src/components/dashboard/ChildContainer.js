import React from "react"
import Dashboard from "./Dashboard"
import InfiniteScroll from "react-infinite-scroll-component"
import "./dashboard.css"

const ChildContainer = () => {

    return(
        <div className='child-container'>
            <InfiniteScroll
                className="infinite-scroll"
                dataLength={100}
                height={'100%'}
                loader={<h4>Loading...</h4>}
                >
                    <Dashboard />
            </InfiniteScroll>
        </div>
    )
}

export default ChildContainer