import './disease.css'
import { FaSearch } from 'react-icons/fa';
import {MdDoubleArrow} from 'react-icons/md'
import {GiPlantRoots} from 'react-icons/gi'
import React, {useState} from 'react';
import {AiFillCamera} from 'react-icons/ai'
import {CiApple} from 'react-icons/ci'
import {GiCorn} from 'react-icons/gi'
import {FaArrowLeft,FaLeaf} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {ImCross} from 'react-icons/im'







import Webcam from 'react-webcam'
import Footer from '../footer/footer';
const WebcamComponent = () => <Webcam />
const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: 'user'

}


const Disease = () =>{

    const [modal, setmodal] = useState({
        status:false,
        name:''
    })
    const [reportmodal, setreportmodal] = useState(false)
    const [report, setreport] = useState({
        disease_name:'',
        information:'',
        symptoms:'',
        treatment:''
    })

    const [picture, setPicture] = useState('')
    const webcamRef = React.useRef(null)
    const capture = React.useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
    })


    const handlesubmit = async e => {
        e.preventDefault();
        console.log(picture)




        if (picture === null) {
            alert('Message field empty')
        }
        else {
            let formData = new FormData()
            formData.append('name', modal.name);
           

            formData.append("image", picture.split(',')[1]);
            console.log(formData)

          
            const url = "#"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                            // "Content-type": "multipart/form-data",
                     },
                body: formData,

            });
         
        }}









    const plants = [
        {
            name:'Apple',
            image:'',
            icon:<CiApple/>
        },
        {
            name:'Maize',
            image:'',
            icon:<GiCorn/>
        },
        {
            name:'Rice',
            image:'',
            icon:<GiPlantRoots/>
        },
        {
            name:'Potato',
            image:'',
            icon:<FaLeaf/>
        }
    ]
    console.log(modal)
    const showreport =()=>{
        setmodal({status:false})
        setreportmodal(!reportmodal)
    }
    const closeandreload=()=>{
        window.location.reload(true)
    }

    return(
        <div className='disease'>
            <div className='diseaselandingtop'>
                <h1>Disease</h1>
                <p>
                    Select the crop below to detect the disease.
                </p>
                <div className='servicesearch'>
                    <input placeholder='Enter your plant'></input>
                    <div className='searchlogo'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='diseasecontent'>
                <h1>Select the Crop</h1>
                <div className='diseasecontainer'>
                    {
                        plants.map((plant, key)=>(
                            <div className='diseasecard' key={key}>
                                <div className='image'>
                                    {plant.icon}
                                </div>
                                <div className='cropname'>
                                    <h1>{plant.name}</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>setmodal({status:true, name:plant.name})}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                        ))
                    }
                </div>
            </div>
            {modal.status===true &&
            <div className='modal'>
                <div className='modalcontainer'>
                    <h2><Link style={{color:'white',textDecoration:'none', display:'flex',alignItems:'center'}} onClick={()=>window.location.reload(true)} to="/services/disease"><FaArrowLeft/></Link>&nbsp;&nbsp;Capture an image</h2>
                    <div>
                        {picture === '' ? (
                            <Webcam
                                audio={false}
                                height={400}
                                ref={webcamRef}
                                width={400}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}

                            />
                        ) : (
                            <img src={picture} alt=" "/>
                        )}
                    </div>
                    <div className='capturebuttons'>

                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                capture()
                            }}
                            className="btn btn-danger"
                        >
                            Capture
                        </button>
                        <div className='submit' onClick={handlesubmit}>
                            <button disabled={picture===''?true:false} onClick={()=>showreport()}>Submit</button>
                        </div>
                    </div>
                    
                </div>
            </div>
}
{
    reportmodal===true &&
    <div className='reportmodal'>
        <div className='cross'><ImCross onClick={()=>closeandreload()}/></div>
        <div className='reportmodalcontent'>
        <div className='title'>
            <img src="../images/reportheader.png"></img><h1>Disease report on {modal.name}</h1>
        </div>
        <div className='reportcontent'>
            <div className='name'>Disease: <span>Jaundice</span></div>
            <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='symptoms'>
                <h2>Symptoms</h2>
                <ul>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                </ul>
            </div>
            <div className='symptoms'>
                <h2>Treatment</h2>
                <ul>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit</li>
                    <br/>
                </ul>
                

            </div>
        </div>
        </div>
    </div>

}



        </div>
        
    )
}

export default Disease;