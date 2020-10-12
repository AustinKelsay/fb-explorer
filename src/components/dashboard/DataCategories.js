import React, {useState} from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector, useDispatch } from 'react-redux'
import "./dashboard.css"
import {FaRegUser, FaBuilding, FaDesktop, FaMailBulk, FaImages, FaComments, FaCalendarWeek, FaUsers, FaUserFriends, FaProjectDiagram,
     FaThumbsUp, FaMapMarkedAlt, FaMoneyBillWave, FaCommentDots, FaAlignCenter, FaNewspaper, FaDownload, FaUserCircle, FaShoppingCart, 
     FaSearch, FaLock, FaBookOpen, FaThumbtack } from 'react-icons/fa';
import { SET_DATA_TYPE } from "../../store/Actions";

const DataCategories = () => {
    const [active, setActive] = useState(0)
    const dispatch = useDispatch()

    const handleClick = (num) => {
        console.log(num)
        setActive(num)
        dispatch({type: SET_DATA_TYPE, payload: num})
    }

    return(
        <div className="data-categories">
            <div onClick={() => handleClick(1)} className={active === 1 ? "data-category" && 'active' : "data-category"}>
                    <FaRegUser className='icon'/>
                    <p className='data-category-text'>About you</p>
                </div>
                <div onClick={() => handleClick(2)} className={active === 2 ? "data-category" && 'active' : "data-category"}>
                    <FaBuilding className='icon' />
                    <p className='data-category-text'>Ads and Businesses</p>
                </div>
                <div onClick={() => handleClick(3)} className={active === 3 ? "data-category" && 'active' : "data-category"}>
                    <FaDesktop className='icon' />
                    <p className='data-category-text'>Apps and websites</p>
                </div>
                <div onClick={() => handleClick(4)} className={active === 4 ? "data-category" && 'active' : "data-category"}>
                    <FaComments className='icon' />
                    <p className='data-category-text'>Comments</p>
                </div>
                <div onClick={() => handleClick(5)} className={active === 5 ? "data-category" && 'active' : "data-category"}>
                    <FaCalendarWeek className='icon' />
                    <p className='data-category-text'>Events</p>
                </div>
                <div onClick={() => handleClick(6)} className={active === 6 ? "data-category" && 'active' : "data-category"}>
                    <FaUsers className='icon' />
                    <p className='data-category-text'>Following and followers</p>
                </div>
                <div onClick={() => handleClick(7)} className={active === 7 ? "data-category" && 'active' : "data-category"}>
                    <FaUserFriends className='icon' />
                    <p className='data-category-text'>Friends</p>
                </div>
                <div onClick={() => handleClick(8)} className={active === 8 ? "data-category" && 'active' : "data-category"}>
                    <FaProjectDiagram className='icon' />
                    <p className='data-category-text'>Groups</p>
                </div>
                <div onClick={() => handleClick(9)} className={active === 9 ? "data-category" && 'active' : "data-category"}>
                    <FaThumbsUp className='icon' />
                    <p className='data-category-text'>Likes and reactions</p>
                </div>
                <div onClick={() => handleClick(10)} className={active === 10 ? "data-category" && 'active' : "data-category"}>
                    <FaMapMarkedAlt className='icon' />
                    <p className='data-category-text'>Location</p>
                </div>
                <div onClick={() => handleClick(11)} className={active === 11 ? "data-category" && 'active' : "data-category"}>
                    <FaShoppingCart className='icon' />
                    <p className='data-category-text'>Marketplace</p>
                </div>
                <div onClick={() => handleClick(12)} className={active === 12 ? "data-category" && 'active' : "data-category"}>
                    <FaCommentDots className='icon' />
                    <p className='data-category-text'>Messages</p>
                </div>
                <div onClick={() => handleClick(13)} className={active === 13 ? "data-category" && 'active' : "data-category"}>
                    <FaAlignCenter className='icon' />
                    <p className='data-category-text'>Other activity</p>
                </div>
                <div onClick={() => handleClick(14)} className={active === 14 ? "data-category" && 'active' : "data-category"}>
                    <FaNewspaper className='icon' />
                    <p className='data-category-text' >Pages</p>
                </div>
                <div onClick={() => handleClick(15)} className={active === 15 ? "data-category" && 'active' : "data-category"}>
                    <FaMoneyBillWave className='icon' />
                    <p className='data-category-text'>Payment history</p>
                </div>
                <div onClick={() => handleClick(16)} className={active === 16 ? "data-category" && 'active' : "data-category"}>
                    <FaImages className='icon'/>
                    <p className='data-category-text' >Photos and Videos</p>
                </div>
                <div onClick={() => handleClick(17)} className={active === 17 ? "data-category" && 'active' : "data-category"}>
                    <FaUserCircle className='icon'/>
                    <p className='data-category-text' >Profile information</p>
                </div>
                <div onClick={() => handleClick(18)} className={active === 18 ? "data-category" && 'active' : "data-category"}>
                    <FaDownload className='icon' />
                    <p className='data-category-text' >Saved items and collections</p>
                </div>
                <div onClick={() => handleClick(19)} className={active === 19 ? "data-category" && 'active' : "data-category"}>
                    <FaSearch className='icon'/>
                    <p className='data-category-text' >Search history</p>
                </div>
                <div onClick={() => handleClick(20)} className={active === 20 ? "data-category" && 'active' : "data-category"}>
                    <FaLock className='icon'/>
                    <p className='data-category-text' >Security and login information</p>
                </div>
                <div onClick={() => handleClick(21)} className={active === 21 ? "data-category" && 'active' : "data-category"}>
                    <FaBookOpen className='icon'/>
                    <p className='data-category-text' >Stories</p>
                </div>
                <div onClick={() => handleClick(22)} className={active === 22 ? "data-category" && 'active' : "data-category"}>
                    <FaThumbtack className='icon'/>
                    <p className='data-category-text'>your places</p>
                </div>
        </div>
    )
}

export default DataCategories