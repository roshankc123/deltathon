import React from 'react';
import {BsSun} from 'react-icons/bs'
import './landing.css'

const Landing = () =>{
    return(
        <div className='landing'>
            <div className='landingtop'>
                <div className='a'>
                    <h1>Dharan</h1>
                    <h2>Monday, Jan 16</h2>
                </div>
                <div className='b'>
                    <div className='bl'>
                        <BsSun className='sun'/>
                        <h3>Sunny and warm</h3>
                    </div>
                    <div className='br'>
                        <h4>35&#176;</h4>
                        
                    </div>
                </div>
            </div>
            <div className='soiltoday'>
                <h1>Soil Today</h1>
                <div className='soilcontainer'>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Wind</h3>
                        <h4>5-8km/hr</h4>
                    </div>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Wind</h3>
                        <h4>5-8km/hr</h4>
                    </div>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Wind</h3>
                        <h4>5-8km/hr</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Landing;