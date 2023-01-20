import React, {useState} from 'react';
import { ImCross } from 'react-icons/im';
import './croprecommend.css'
import {SiOpencollective} from 'react-icons/si'
import {GiPlantRoots} from 'react-icons/gi'
import {MdDoubleArrow} from 'react-icons/md'



const CropRecommend = () =>{
    const [data, setdata]= useState({
        n:'3',
        p:'2',
        k:'4',
        temperature:'2',
        rainfall:'6',
    })
    const [modal, setmodal]= useState(false)
    const [report, setreport] = useState(false)
    const closeandreload=()=>{
        window.location.reload(true)
    }
    
    const handlesubmit=e=>{
        e.preventDefault();
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
        <div className='croprecommend'>
            <div className='croplandingtop'>
                <h1>Crop Recommendation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                <div className='takedata'>
                    <h2 onClick={()=>setmodal(true)}>Retrieve Field Data&nbsp;&nbsp;<SiOpencollective/></h2>
                </div>
            </div>
        {
            report===true &&
            <div className='possiblereport'>
                <h3>Possible Harvests</h3>
                <div className='possiblecontainer'>
                    <div className='possiblecard'>
                                <div className='image'>
                                    <GiPlantRoots/>
                                </div>
                                <div className='cropname'>
                                    <h1>Maize</h1>
                                </div>
                                <div className='harvestbutton'>
                                    <MdDoubleArrow/>
                                </div>   
                    </div>
                    <div className='possiblecard'>
                                <div className='image'>
                                    <GiPlantRoots/>
                                </div>
                                <div className='cropname'>
                                    <h1>Maize</h1>
                                </div>
                                <div className='harvestbutton'>
                                    <MdDoubleArrow/>
                                </div>   
                    </div>
                    <div className='possiblecard'>
                                <div className='image'>
                                    <GiPlantRoots/>
                                </div>
                                <div className='cropname'>
                                    <h1>Maize</h1>
                                </div>
                                <div className='harvestbutton'>
                                    <MdDoubleArrow/>
                                </div>   
                    </div>
                    <div className='possiblecard'>
                                <div className='image'>
                                    <GiPlantRoots/>
                                </div>
                                <div className='cropname'>
                                    <h1>Maize</h1>
                                </div>
                                <div className='harvestbutton'>
                                    <MdDoubleArrow/>
                                </div>   
                    </div>
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
                                <h4>Rainfall</h4>
                                <input value={data.rainfall} name="rainfall" onChange={handleinputchange}></input>
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

export default CropRecommend;