import React from 'react';
import CropRecommend from '../components/croprecommendation/croprecommend';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';

const Servicepage = () =>{
    return(
        <div className='servicespage'>
            <CropRecommend/>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Servicepage;