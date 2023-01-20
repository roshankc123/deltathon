import React from 'react';
import './servicelanding.css'
import {FaSearch} from 'react-icons/fa'
import {GiBugNet} from 'react-icons/gi'
import {RiMedicineBottleLine} from 'react-icons/ri'
import {MdDoubleArrow} from 'react-icons/md'
import {VscMention} from 'react-icons/vsc'
import {BiMailSend, BiMap} from 'react-icons/bi'
import {GoBook} from 'react-icons/go'
import {FiPhoneCall} from 'react-icons/fi'
import {TbHeartbeat, TbReport} from 'react-icons/tb'

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
                        <a href="/services/croprecommend"><VscMention className='servicelogo'/></a>
                        <h3>Crop Recommendation</h3>
                    </div>
                    
                    <div className='servicecard'>
                        <a href="/services/disease"><GiBugNet className='servicelogo'/></a>
                        <h3>Disease Detection</h3>
                    </div>
                    <div className='servicecard'>
                        <a href="/services/fertilizerrecommend"><RiMedicineBottleLine className='servicelogo'/></a>
                        <h3>Fertilizer Recommendation</h3>
                    </div>
                    <div className='servicecard'>
                        <TbHeartbeat className='servicelogo'/>
                        <h3>Crop Monitoring</h3>
                    </div>
                    <div className='servicecard'>
                    <a href="/services/soil"><TbReport className='servicelogo'/></a>
                        <h3>Soil Report</h3>
                    </div>
                    <div className='servicecard'>
                        <a href="/services/agropedia"><GoBook className='servicelogo'/></a>
                        <h3>Agropedia</h3>
                    </div>
                    <div className='servicecard'>
                        <BiMailSend className='servicelogo'/>
                        <h3>Report Doctor</h3>
                    </div>
                    <div className='servicecard'>
                        <FiPhoneCall className='servicelogo'/>
                        <h3>Call a Doctor</h3>
                    </div>
                    <div className='servicecard'>
                        <a href="/services/vetenarymaps"><BiMap className='servicelogo'/></a>
                        
                        <h3>Vetenary Near Me</h3>
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