// import React from 'react';


// const DiseaseCamera = () =>{
//     return(
//         <div className='diseasecamera'>
            
//         </div>
//     )
// }

// export default DiseaseCamera;


import React, { useState } from 'react'
import axios from "axios";

import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: 'user'

}

const DiseaseCamera = () => {
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
            formData.append('name', "Chris");
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

            const url = "https://192.168.10.69:8000/predictdisease"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                            // "Content-type": "multipart/form-data",
                     },
                body: formData,

            });
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



    return (
        <div>
            <h2 className="mb-5 text-center">
                React Photo Capture using Webcam Examle
            </h2>
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
            <div>

                <button
                    onClick={(e) => {
                        e.preventDefault()
                        capture()
                    }}
                    className="btn btn-danger"
                >
                    Capture
                </button>
            </div>
            <div className='submit' onClick={handlesubmit}>
                <button>Submit</button>
            </div>
        </div>
    )
}
export default DiseaseCamera;