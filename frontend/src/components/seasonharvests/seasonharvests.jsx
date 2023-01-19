import React from 'react';
import {MdDoubleArrow} from 'react-icons/md'
import './seasonharvests.css'
import {GiPlantRoots} from 'react-icons/gi'




const SeasonHarvest = () =>{
    return(
        <div className='seasonharvest'>
            <div className='title'><h1>Season Harvests</h1></div>
            <div className='harvestcontainer'>
                <div className='harvestcard'>
                    <div className='image'>
                        <GiPlantRoots/>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                        <h2>32 days since harvest</h2>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                <div className='harvestcard'>
                    <div className='image'>
                        <GiPlantRoots/>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                        <h2>32 days since harvest</h2>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
                <div className='harvestcard'>
                    <div className='image'>
                        <GiPlantRoots/>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                        <h2>32 days since harvest</h2>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div><div className='harvestcard'>
                    <div className='image'>
                        <GiPlantRoots/>
                    </div>
                    <div className='cropname'>
                        <h1>Maize</h1>
                        <h2>32 days since harvest</h2>
                    </div>
                    <a href="#" className='harvestbutton'>
                        <MdDoubleArrow/>
                    </a>   
                </div>
            </div>
        </div>
    )
}

export default SeasonHarvest;