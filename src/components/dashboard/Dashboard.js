import React, {useState} from "react"
import DataCards from "./dataDisplay/DataCards"
import { useSelector } from 'react-redux'
import './dashboard.css'

const Dashboard = () => {
    const activeData = useSelector(state => Object.entries(state.active_data_type).map(([key, value]) => {
        return value
    }))
    console.log(activeData[0])
    
    // This function returns the correct key to pass into DataCards
    const keyMatcher = () => {
        
    }
    
    let masterKey = ''

    const dataParser = (object) => {
        return(
            Object.entries(object).map(([key, value]) => {

                //Check to see if the key is NaN
                if (isNaN(key)) {
                    masterKey = key
                    console.log(masterKey)
                }
                if(typeof value == 'object') {
                    return dataParser(value);
                }
                
                else if (Array.isArray(value)) {
                        return value.map((item) => {
                            return(
                                <DataCards mk={masterKey} k={key} value={item}  />
                            )
                        });
                    }
                
                    else if (typeof value == 'number' || typeof value == 'string') {
                    return(
                        <DataCards mk={masterKey} k={key} value={value}  />
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
        activeData[0] && Object.keys(activeData[0]).length 
        ?
        Object.entries(activeData[0]).map(([key, value]) => {
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