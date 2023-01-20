import React, {useState, useEffect} from 'react';
import { ImCross } from 'react-icons/im';
import './fertilizerrecommend.css'
import {SiOpencollective} from 'react-icons/si'
import {GiPlantRoots} from 'react-icons/gi'
import {MdDoubleArrow} from 'react-icons/md'



const FertilizerRecommend = () =>{

    useEffect(() => {

        const fetchData = () =>{
        fetch('https://192.168.43.164:8000/update')
        .then((response) => response.json())
        .then((data)=>{
            setdata({
                n:data[0],
                p:data[1],
                k:data[2],
                temperature:data[3],
                soil_type:"",
                crop_type:"",
                humidity:data[4],
                moisture:data[5],
    
    
            })
        }

        )
    }

        const timer = setTimeout(() => {
            fetchData();
          }, 2000);
        
      });








    const [data, setdata]= useState({})
    const [modal, setmodal]= useState(false)
    const closeandreload=()=>{
        window.location.reload(true)
    }
    const [report, setreport] = useState(false)
    const [reportdata, setreportdata] = useState('')
    
    const handlesubmit=e=>{
        e.preventDefault();
        fetch('https://192.168.43.164:8000/predictfertilizer')
        .then((response) => response.json())
        .then((data)=>{
            setreportdata(data)
            
        })
        setmodal(false)
        setreport(true)








        // console.log(data)
        //     fetch("#", {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-type": "application/json",
        //             // 'X-CSRFToken': csrftoken
        //         }
        //     })

        //         .then(response => response.json())
        //     setmodal(false)
        //     setreport(true)



    }

    const handleinputchange = e=>{
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }



    return(
        <div className='fertilizerrecommend'>
            <div className='croplandingtop'>
                <h1>Fertilizer Recommendation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                <div className='takedata'>
                    <h2 onClick={()=>setmodal(true)}>Retrieve Field Data&nbsp;&nbsp;<SiOpencollective/></h2>
                </div>
            </div>
        {
            report===true &&
            <div className='possiblereport'>
                <h3>Fertilizer Recommended: <span>{reportdata}</span></h3>
                <div className='possiblecontainer'>
                    <p>Some description in the fertilizer</p>
                    
                    
                    
                </div>
            </div>
            
        }



            {
                modal===true &&
                    <div className='modal'>
                        <div className='reportmodal' data-aos="fade-up">
                            <div className='cross'><ImCross onClick={()=>closeandreload()}/></div>
                        <div className='reportmodalcontent'>
                        <div className='title'>
                            <img src="../images/reportheader.png"></img><h1>Confirm your data</h1>
                        </div>
                        <div className='inputs'>
                            <div className='input_field'>
                                <h4>Nitrogen</h4>
                                <input value={data.n} name="n" onChange={handleinputchange}></input>
                            </div>
                            <div className='input_field'>
                                <h4>Phosphorus</h4>
                                <input value={data.p} name="p" onChange={handleinputchange}></input>
                            </div>
                            <div className='input_field'>
                                <h4>Potassium</h4>
                                <input value={data.k} name="k" onChange={handleinputchange}></input>
                            </div>
                            <div className='input_field'>
                                <h4>Temperature</h4>
                                <input value={data.temperature} name="temperature" onChange={handleinputchange}></input>
                            </div>
                            <div className='input_field'>
                                <h4>Crop Type</h4>
                                {/* <input value={data.crop_type} name="crop_type" onChange={handleinputchange}></input> */}
                                <select name="crop_type" onChange={handleinputchange}>
                                    <option value="Maize">Maize</option>
                                    <option value="Sugarcane">Sugarcane</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Tobacco">Tobacco</option>
                                    <option value="Paddy">Paddy</option>
                                    <option value="Barley">Barley</option>
                                    <option value="Wheat">Wheat</option>
                                    <option value="Millets">Millets</option>
                                    <option value="Oil_seeds">Oil Seeds</option>
                                    <option value="Pulses">Pulses</option>
                                    <option value="Ground_nuts">Ground Nuts</option>
                                </select>

                            </div>
                            <div className='input_field'>
                                <h4>Soil Type</h4>
                                {/* <input value={data.soil_type} name="soil_type" onChange={handleinputchange}></input> */}
                                <select name="soil_type" onChange={handleinputchange}>
                                    <option value="Sandy">Sandy</option>
                                    <option value="Loamy">Loamy</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Clayey">Clayey</option>
                                </select>
                            </div>
                            <div className='input_field'>
                                <h4>Humidity</h4>
                                <input value={data.humidity} name="humidity" onChange={handleinputchange}></input>
                            </div>
                            <div className='input_field'>
                                <h4>Moisture</h4>
                                <input value={data.moisture} name="moisture" onChange={handleinputchange}></input>
                            </div>
                            <button onClick={handlesubmit}>Get Result</button>
                        </div>
                    </div>
            </div>  

                </div>
            }
            
                
            
            
        </div>
    )
}

export default FertilizerRecommend;