import React from 'react';
import './intro.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {IoLogoApple} from 'react-icons/io'
import { Link } from "react-router-dom";





const Intro = () => {
    return(
        <div className='intro'>
            <div className='introcontent'>
            <div className='logo'>
            <IoLogoApple className='logos'/>

            </div>
            <h1>Welcome to the new</h1>
            <h2>Products and Solutions.</h2>
            <Link to="/home"><button>Proceed<AiOutlineArrowRight className='arrowright'/></button></Link>
        </div>
        </div>
    )
}

export default Intro;