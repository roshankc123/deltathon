import React from 'react';
import './servicelanding.css'
import {FaSearch} from 'react-icons/fa'
import {MdDoubleArrow} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Servicelanding = () =>{
    return(
        <div className='servicelanding'>
            <div className='servicelandingtop'>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </p>
                <div className='servicesearch'>
                    <input placeholder='Search your service'></input>
                    <div className='searchlogo'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='servicelandingcontent'>
                <h1>
                    Services we offer
                </h1>
                <div className='servicecontainer'>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Crop Recommendation</h3>
                    </div>
                    <div className='servicecard'>
                        <Link to="/services/disease"><FaSearch className='servicelogo'/></Link>
                        <h3>Disease Detection</h3>
                    </div>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Fertilizer Recommendation</h3>
                    </div>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Crop Monitoring</h3>
                    </div>
                    <div className='servicecard'>
                    <Link to="/services/soil"><FaSearch className='servicelogo'/></Link>
                        <h3>Soil Report</h3>
                    </div>
                    <div className='servicecard'>
                        <Link to="/services/soil"><FaSearch className='servicelogo'/></Link>
                        <h3>Soil Report</h3>
                    </div>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Soil Report</h3>
                    </div>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Soil Report</h3>
                    </div>
                    <div className='servicecard'>
                        <FaSearch className='servicelogo'/>
                        <h3>Soil Report</h3>
                    </div>
                    
                </div>
            </div>
            <div className='previouslogs'>
                <h1>Previous Logs</h1>
                <div className='logcontainer'>
                </div><div className='logcard'>
                    <div className='date'>
                        <h3>29th Jan</h3>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                    </div>
                    <div className='work'>
                        <h1>Disease Detection</h1>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                <div className='logcard'>
                    <div className='date'>
                        <h3>29th Jan</h3>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                    </div>
                    <div className='work'>
                        <h1>Disease Detection</h1>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                <div className='logcard'>
                    <div className='date'>
                        <h3>29th Jan</h3>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                    </div>
                    <div className='work'>
                        <h1>Disease Detection</h1>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                <div className='logcard'>
                    <div className='date'>
                        <h3>29th Jan</h3>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                    </div>
                    <div className='work'>
                        <h1>Disease Detection</h1>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                
                </div>

        </div>
    )
}

export default Servicelanding;