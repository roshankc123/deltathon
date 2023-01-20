import React, {useState} from 'react';
import './soilreport.css'
import {AiFillCamera} from 'react-icons/ai'
import {FaArrowLeft} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'


import { Link } from 'react-router-dom';
import Webcam from 'react-webcam'
import Footer from '../footer/footer';
const WebcamComponent = () => <Webcam />
const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: 'user'

}


const SoilReport = () =>{

    const [cameramodal, setcameramodal] = useState(false)
    const [reportmodal, setreportmodal] = useState(false)

    const [picture, setPicture] = useState('')
    const webcamRef = React.useRef(null)
    const capture = React.useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
    })


    const handlesubmit = async e => {
        e.preventDefault();




        if (picture === null) {
            alert('Message field empty')
        }
        else {
            let formData = new FormData()
            // formData.append('name', "ramdom");
            // const byteCharacters = picture
            // const byteNumbers = new Array(byteCharacters.length);
            // for (let i = 0; i < byteCharacters.length; i++) {
            //     byteNumbers[i] = byteCharacters.charCodeAt(i);
            // }
            // const byteArray = new Uint8Array(byteNumbers);
            // const blob = new Blob([byteArray], { type: "image/jpg" });
            // console.log(picture.src.split(','))
            // console.log(picture.split(','))
            // const y = picture.split(',');

            formData.append("image", picture.split(',')[1]);
            console.log(formData)

            // for (var [key, value] of formData.entries()) {
            //     console.log(key, value);
            // }

            // fetch("https://192.168.10.69:8000/predictdisease", {
            //     method: "POST",
            //     body: formData,
            //     headers: {
            //         "Content-type": "multipart/form-data",
            //     }
            // })

            //     .then(response => response.json())
            //     .then(response => console.log(response.json))

            const url = "https://192.168.43.164:8000/predictsoil"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                            // "Content-type": "multipart/form-data",
                     },
                body: formData,

            });
            const x = await response.json()
          
            setreportdata(x)
            // axios({
  
            //     url: "https://192.168.10.69:8000/predictdisease",
            //     method: "POST",
            //     headers: {
            
            //       // Add any auth token here
            //       authorization: "your token comes here",
            //       "Content-type": "multipart/form-data",
            //     },
            
            //     // Attaching the form data
            //     data: formData,
            //   })
            
            //     // Handle the response from backend here
            //     .then((res) => { })
            
            //     // Catch errors if any
            //     .catch((err) => { });
            // }
        }}
        const [reportdata, setreportdata] = useState('')

        const showreport =()=>{
            setcameramodal(false)
            setreportmodal(!reportmodal)
            console.log(reportdata.name)
        }
        const closeandreload=()=>{
            window.location.reload(true)
        }



    return(
        <div className='soilreport'>
            <div className='soillandingtop'>
                <h1>Soil Profiling</h1>
                <p>Soil Profiling is a technique to know about the type of soil.</p>
                <div className='clickable'><h3>Know your soil</h3><AiFillCamera className='soilcamera' onClick={()=>setcameramodal(true)}/></div>
            </div>
            <div className='soilcontent'>
                <h2>Why Soil Profiling?</h2>
                <p>
                    Soil are of different types. It is very essential to know the type of soil as the choice of crops to sow and the amount of fertilizer to use. Our AI enabled system helps you to classify your soil type and maximize the yeild in your land.
                </p>

            </div>
            {
                cameramodal===true &&
                <div className='modal'>
                <div className='modalcontainer'>
                    <h2><Link style={{color:'white',textDecoration:'none', display:'flex',alignItems:'center'}} onClick={()=>window.location.reload(true)} to="/services/soil"><FaArrowLeft/></Link>&nbsp;&nbsp;Capture an image</h2>
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
    <div className='reportmodal' style={{right:0}}>
        <div className='cross'><ImCross onClick={()=>closeandreload()}/></div>
        <div className='reportmodalcontent'>
        <div className='title'>
            <img src="../images/reportheader.png"></img><h1>Soil Report</h1>
        </div>
        <div className='reportcontent'>
            <div className='name'>Soil Type: <span>{reportdata}</span></div>
            <p className='information'>Some description on the soil.</p>
            
            
        </div>
        </div>
    </div>

}
        </div>
    )
}

export default SoilReport;