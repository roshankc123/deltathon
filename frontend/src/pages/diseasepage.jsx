import React from 'react'
import Disease from '../components/disease/disease'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'



const Diseasepage = ()=>{
    return(
        <div className='diseasepage'>
            <Disease/>
            <Nav/>
            <Footer/>
        </div>
    )
}

export default Diseasepage;