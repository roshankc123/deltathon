import React, {useState} from 'react';
import { ImCross } from 'react-icons/im';
import './fertilizerrecommend.css'
import {SiOpencollective} from 'react-icons/si'
import {GiPlantRoots} from 'react-icons/gi'
import {MdDoubleArrow} from 'react-icons/md'



const FertilizerRecommend = () =>{
    const [data, setdata]= useState({
        n:'3',
        p:'2',
        k:'4',
        temperature:'2',
        soil_type:'6',
        crop_type:'Maize',
        humidity:'5',
        moisture:'6',
    })
    const [modal, setmodal]= useState(false)
    const [report, setreport] = useState(false)
    const closeandreload=()=>{
        window.location.reload(true)
    }
    
    const handlesubmit=e=>{
        e.preventDefault();
        console.log(data)
            fetch("#", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                    // 'X-CSRFToken': csrftoken
                }
            })

                .then(response => response.json())
            setmodal(false)
            setreport(true)



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
                <h3>Fertilizer Recommended: <span>Urea</span></h3>
                <div className='possiblecontainer'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                    
                    
                </div>
            </div>
            
        }



            {
                modal===true &&
                    <div className='modal'>
                        <div className='reportmodal'>
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