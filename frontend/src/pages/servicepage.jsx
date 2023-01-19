import React from 'react';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';
import Servicelanding from '../components/servicelanding/servicelanding';

const Servicepage = () =>{
    return(
        <div className='servicespage'>
            <Servicelanding/>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Servicepage;