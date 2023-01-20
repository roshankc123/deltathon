import React, {useEffect, useState} from 'react';
import {BsSun} from 'react-icons/bs'
import './landing.css'

const Landing = () =>{
    const [soildata2, setsoildata2] = useState({
        humidity:'',
        moisture:'',
        temperature:'',

    })

    useEffect(() => {

        const fetchData = () =>{
        fetch('https://192.168.43.164:8000/update')
        .then((response) => response.json())
        .then((data)=>{
            setsoildata2({
                temperature:data[3],
                humidity:data[4],
                moisture:data[5],
            })
        }

        )
    }

        const timer = setTimeout(() => {
            fetchData();
          }, 1000);
        
        

       
        
      });



    return(
        <div className='landing'>
            <div className='landingtop'>
                <div className='a'>
                    <h1>Dharan</h1>
                    <h2>Friday, Jan 20</h2>
                </div>
                <div className='b'>
                    <div className='bl'>
                        <BsSun className='sun'/>
                        <h3>Sunny and warm</h3>
                    </div>
                    <div className='br'>
                        <h4>18&#176;</h4>
                        
                    </div>
                </div>
            </div>
            <div className='soiltoday'>
                <h1>Soil Today</h1>
                <div className='soilcontainer'>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Humidity</h3>
                        <h4>{soildata2.humidity}</h4>
                    </div>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Moisture</h3>
                        <h4>{soildata2.moisture}</h4>
                    </div>
                    <div className='soilcard'>
                        <BsSun/>
                        <h3>Temp</h3>
                        <h4>{soildata2.temperature}</h4>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}


export default Landing;