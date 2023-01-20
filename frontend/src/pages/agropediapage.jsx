import React from 'react';
import Agropedia from '../components/agropedia/agropedia';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/nav';

const Agropediapage = () =>{
    return(
        <div className='servicespage'>
            <Agropedia/>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Agropediapage;