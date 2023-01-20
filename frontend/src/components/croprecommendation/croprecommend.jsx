import React, {useState, useEffect} from 'react';
import { ImCross } from 'react-icons/im';
import './croprecommend.css'
import {SiOpencollective} from 'react-icons/si'
import {GiPlantRoots} from 'react-icons/gi'
import {MdDoubleArrow} from 'react-icons/md'



const CropRecommend = () =>{
    const [data, setdata]= useState({
        n:'',
        p:'',
        k:'',
        temperature:'',
        humidity:'',
    })

    // const [data, setdata]= useState([])

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



    const [modal, setmodal]= useState(false)
    const [report, setreport] = useState(false)
    const [reportdata, setreportdata] = useState({
        name:''
    })
    const closeandreload=()=>{
        window.location.reload(true)
    }
    
    const handlesubmit=e=>{
        e.preventDefault();

        fetch('https://192.168.43.164:8000/predictcrop')
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            setreportdata({
                name:data[0]
            })

        })
        setmodal(false)
        setreport(true)


            // fetch("#", {
            //     method: "POST",
            //     body: JSON.stringify(data),
            //     headers: {
            //         "Content-type": "application/json",
            //         // 'X-CSRFToken': csrftoken
            //     }
            // })

            //     .then(response => response.json())
            // setmodal(false)
            // setreport(true)



    }

    const handleinputchange = e=>{
        var { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })
    }
    // const newdata = []


    const retrievedata = () =>{
        fetch('https://192.168.43.164:8000/update')
        .then((response) => response.json())
        .then((data) => 
        // newdata.push(data)
        setdata({
            n:data[0],
            p:data[1],
            k:data[2],
            temp:data[3],
            humidity:data[4],
            moisture:data[5],


        })
        

        // console.log(data)
        );
        // console.log(newdata)

    }



    return(
        <div className='croprecommend'>
            <div className='croplandingtop'>
                <h1>Crop Recommendation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                <div className='takedata'>
                    {/* <h2 onClick={retrievedata}>Retrieve Field Data&nbsp;&nbsp;<SiOpencollective/></h2> */}
                    <h2 onClick={()=>setmodal(true)}>Analyze&nbsp;&nbsp;<SiOpencollective/></h2>
                </div>
            </div>
            {data[0]}
            <div className='croprecommend1'>
                {/* {
                    newdata.map((data, key)=>(
                        <h3>data[0]</h3>
                    ))
                } */}
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
                                    <h1>{reportdata.name}</h1>
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
                    <div className='modal' data-aos="fade-up">
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
                                <h4>Humidity</h4>
                                <input value={data.humidity} name="humidity" onChange={handleinputchange}></input>
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