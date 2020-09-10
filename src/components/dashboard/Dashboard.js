import React from "react"
import DataCards from "./dataDisplay/DataCards"
import { useSelector } from 'react-redux'
import './dashboard.css'

const Dashboard = () => {
    const activeData = useSelector(state => state.active_data_type)

    const dataParser = (object) => {
        console.log(typeof object)
        return(
            Object.entries(object).map(([key, value]) => {
                if(typeof value == 'object') {
                    console.log('OBBBBBB')
                    return dataParser(value);
                }
                
                else if (Array.isArray(value)) {
                    console.log('ARRRRRR')
                    
                        return value.map((item) => {
                            return(
                                <DataCards k={key} value={item}  />
                            )
                        });
                    }
                
                    else if (typeof value == 'number' || typeof value == 'string') {
                    return(
                        <DataCards k={key} value={value}  />
                        )
                    }
                    
                    else if (typeof value == 'undefined') {
                        return null
                    }
                    else return dataParser(value)
            })
            )
        }
        

return(
        Object.keys(activeData).length 
        ?
            <div className='dashboard'>
                {
                dataParser(activeData) 
                }
            </div>
        :   
            <div className='dashboard-empty'>
                    <h3 className='dashboard-empty-message'>Select one of the data categories to populate the dashboard</h3>
            </div>
)
}

export default Dashboard