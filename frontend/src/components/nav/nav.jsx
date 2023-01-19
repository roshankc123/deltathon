import React from 'react';
import './nav.css'
import {AiFillSchedule,AiFillHome} from 'react-icons/ai'
import {FaServicestack} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <div className='navig'>
            <Link to="/home">
                <div className='n1'>
                    <AiFillHome/>
                    <h3>Home</h3>
                </div>
            </Link>
            <Link to="/services">
                <div className='n2'>
                    <FaServicestack/>
                    <h3>Services</h3>
                </div>
            </Link>
            <Link to="/schedules">
                <div className='n3'>
                    <AiFillSchedule/>
                    <h3>Schedule</h3>          
                </div>
            </Link>
        </div>
    )
}

export default Nav;