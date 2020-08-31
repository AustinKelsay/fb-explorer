import React from "react"
import { useSelector, useDispatch } from 'react-redux'

const Nav = () => {
    const activeData = useSelector(state => state.active_data_type)
    console.log(activeData)
    return(
        <div className= 'nav'>
            Navbar test
        </div>
    )
}

export default Nav;