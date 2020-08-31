import React from "react"
import { useSelector } from 'react-redux'
import './dashboard.css'

const Dashboard = () => {
    const activeData = useSelector(state => state.active_data_type)

    return(
        <div className='dashboard'>
            {Object.keys(activeData)}
        </div>
    )
}

export default Dashboard