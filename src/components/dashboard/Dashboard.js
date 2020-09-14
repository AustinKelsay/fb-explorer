import React, {useState} from "react"
import DataCards from "./dataDisplay/DataCards"
import { useSelector } from 'react-redux'
import './dashboard.css'

const Dashboard = () => {
    const activeData = useSelector(state => state.active_data_type)

    const dataParser = (object) => {
        return(
            Object.entries(object).map(([key, value]) => {
                //Check to see if the key is NaN
                if(typeof value == 'object') {
                    return dataParser(value);
                }
                
                else if (Array.isArray(value) && NaN(key)) {
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
        Object.entries(activeData).map(([key, value]) => {
            if(Array.isArray(value)){
                return value.map((item) => {
                    return(
                        <DataCards key={Math.random()} k={key} value={item}  />
                    )
                })
            }
            else if (typeof value === 'object') {
                return (
                    <div className='dashboard'>
                    {
                        dataParser(activeData) 
                    }
                    </div>
                )
            }
        })
        :   
            <div className='dashboard-empty'>
                    <h3 className='dashboard-empty-message'>Select one of the data categories to populate the dashboard</h3>
            </div>
)
}

export default Dashboard