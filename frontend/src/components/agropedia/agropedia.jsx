import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { GiPlantRoots } from 'react-icons/gi';
import { MdDoubleArrow } from 'react-icons/md';
// import Agrodata from './agropedia'

import './agropedia.css'

const Agropedia = () =>{

    const Agrodata = [
        {"name": "Rice", 
        "information": "Rice is a staple food for a large part of the world's human population, especially in Asia. It is the most important grain with regard to human nutrition and caloric intake, providing more than one fifth of the calories consumed worldwide by humans.", 
        "climate": "Rice can be grown in a wide range of climates, from tropical to subtropical to temperate. It is typically grown in areas with high temperatures, high humidity and a lot of rainfall."},
        {"name": "Maize",
        "information": "Maize is a cereal grain that is commonly known as corn and is one of the most widely grown crops in the world. It is a staple food in many parts of the world and is used for both food and feed.", 
        "climate": "Maize can be grown in a wide range of climates, from tropical to temperate. It requires a warm growing season and is typically grown in regions with moderate rainfall and high temperatures."},
        {"name": "Chickpea", "information": "Chickpea is a legume that is also known as garbanzo bean. It is a versatile crop that is used for both food and feed. It is high in protein and is a good source of dietary fiber.", 
        "climate": "Chickpea can be grown in a wide range of climates, from tropical to temperate. It prefers a cool, moist growing season and is typically grown in regions with moderate rainfall and cool temperatures."},
        {"name": "Kidneybeans", 
        "information": "The kidney bean is a variety of the common bean (Phaseolus vulgaris). It is named for its visual resemblance in shape and color to a kidney. Red kidney beans are usually used in salads, chili con carne, and other dishes.",
        "climate": "Kidney beans are a warm-weather crop that grows best in temperatures between 20 and 30 \u00b0C. They need a long, frost-free growing season, and require well-draining soil with a pH between 6.0 and 7.0."},
        {"name": "Pigeonpeas", 
        "information": "Pigeonpea is a tropical legume crop grown for their small, edible seeds. They are drought-resistant and are grown in areas of low rainfall.", 
        "climate": "Pigeonpea is a tropical crop and is grown mostly in the tropical and subtropical regions of the world. It needs a long, frost-free growing season and is typically grown in areas with high temperatures and low rainfall."},
        {"name": "Mothbeans",
        "information": "Moth bean is a drought-resistant legume that is grown mainly in arid and semi-arid regions of India. They are drought-resistant and are grown in areas of low rainfall.", 
        "climate": "Moth beans are a tropical crop and are grown mostly in the tropical and subtropical regions of India. It needs a long, frost-free growing season and is typically grown in areas with high temperatures and low rainfall."},
        {"name": "Mungbean", "information": "Mung bean is a small, green legume that is widely cultivated in Asia. It is often used in soups, stews, and curries, and is also used to make sprouts. It is a good source of protein, and is also rich in vitamins and minerals.", "climate": "Mung bean is a tropical crop and is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},
        {"name": "Blackgram", 
        "information": "Black gram is a small, black bean that is widely cultivated in Asia. It is often used in soups, stews, and curries, and is also used to make sprouts. It is a good source of protein, and is also rich in vitamins and minerals.", 
        "climate": "Black gram is a tropical crop and is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},
        {"name": "Lentil", 
        "information": "Lentils are a type of legume that are widely cultivated in Asia and Europe. They are a good source of protein, and are also rich in vitamins and minerals. They are often used in soups, stews, and curries.", 
        "climate": "Lentils are a cool-season crop and are typically grown in regions with moderate temperatures and moderate rainfall. They require a long, frost-free growing season and are typically grown in areas with cool temperatures."},
        {"name": "Pomegranate", 
        "information": "Pomegranate is a fruit-bearing deciduous shrub or small tree in the family Lythraceae that is grown for its red, seed-containing fruit, which is also known as a pomegranate. It is native to the region from Iran to the Himalayas.", 
        "climate": "Pomegranate is a subtropical crop that is grown in regions with mild winters and hot summers. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},
        {"name": "Banana", 
        "information": "Bananas are a staple fruit that is widely cultivated in tropical regions around the world. They are a good source of potassium, vitamin C and dietary fiber.", "climate": "Bananas are a tropical crop and are typically grown in regions with high temperatures and high humidity. They require a long, frost-free growing season and are typically grown in areas with moderate rainfall."},
        {"name": "Mango",
        "information": "Mango is a tropical fruit that is widely cultivated in tropical and subtropical regions around the world. It is a good source of vitamins A and C, and is also rich in antioxidants.", 
        "climate": "Mango is a tropical fruit that is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."}, 
        {"name": "Grapes", 
        "information": "Grapes are a type of fruit that is widely cultivated for their sweet and juicy berries. They can be eaten fresh or used to make wine, juice, and jelly. Grapes are a good source of vitamins C and K, and are also rich in antioxidants.", 
        "climate": "Grapes are typically grown in regions with mild winters and warm summers. They require a long, frost-free growing season and are typically grown in areas with moderate rainfall."},
        {"name": "Watermelon", 
        "information": "Watermelon is a type of fruit that is widely cultivated for its juicy and sweet flesh. It is a good source of hydration and also a good source of vitamins A and C.", 
        "climate": "Watermelon is a warm-season crop that is typically grown in regions with hot summers and mild winters. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."}, {"name": "Muskmelon", "information": "Muskmelon is a type of fruit that is widely cultivated for its juicy and sweet flesh. It is a good source of hydration and also a good source of vitamins A and C.", "climate": "Muskmelon is a warm-season crop that is typically grown in regions with hot summers and mild winters. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."}, {"name": "Apple", "information": "Apple is a pomaceous fruit, that is one of the most widely cultivated tree fruits. It is a good source of dietary fiber, vitamin C and antioxidants.", "climate": "Apple is grown in the temperate regions, with cold winters and mild summers. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."}, {"name": "Orange", "information": "Orange is a citrus fruit that is widely cultivated for its sweet and juicy flesh. It is a good source of vitamin C, and is also rich in antioxidants.", "climate": "Orange is a subtropical crop that is typically grown in regions with mild winters and warm summers. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},{"name": "Papaya", "information": "Papaya is a tropical fruit that is widely cultivated in tropical and subtropical regions around the world. It is a good source of vitamins A and C, and is also rich in antioxidants.", "climate": "Papaya is a tropical fruit that is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."}, {"name": "Coconut", "information": "Coconut is a tropical fruit that is widely cultivated in tropical regions around the world. The coconut fruit is a drupe, not a true nut. It is high in fiber and is a good source of manganese.", "climate": "Coconut is a tropical crop that is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},{"name": "Cotton", "information": "Cotton is a type of fiber that is widely cultivated for its soft and fluffy fibers, which are used to make textiles. Cotton is a good source of cellulose, which is used in the production of paper and other products.", "climate": "Cotton is a warm-season crop that is typically grown in regions with hot summers and mild winters. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall."},{"name": "Jute", "information": "Jute is a long, soft, shiny vegetable fiber that can be spun into coarse, strong threads. It is produced primarily from plants in the genus Corchorus, which is in the mallow family Malvaceae.", "climate": "Jute is a tropical crop that is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall and high annual precipitation."}, {"name": "Coffee", "information": "Coffee is a drink made from the roasted seeds of the Coffea plant. It is one of the most popular beverages in the world and is a major export commodity. It is a good source of caffeine and antioxidants.", "climate": "Coffee is a tropical crop that is typically grown in regions with high temperatures and high humidity. It requires a long, frost-free growing season and is typically grown in areas with moderate rainfall and high annual precipitation."}
    ]

    



    const [modaldata, setmodaldata]= useState({
        status:"",
        name:'',
        information:'',
        climate:''
    })
    // const Agrodata = [
    //     {
    //         name:'Apple',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:'',
    //     },
    //     {
    //         name:'Maize',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     },
    //     {
    //         name:'Rice',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     },
    //     {
    //         name:'Potato',
    //         icon:<GiPlantRoots/>,
    //         information:'',
    //         climate:''
    //     }
    // ]
    return(
        <div className='agropedia'>
            <div className='agropediatop'>
                <h1>Agropedia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                <div className='servicesearch'>
                    <input placeholder='Search for plant'></input>
                    <div className='searchlogo'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='agrocontent'>
                <h2>Know your plants</h2>
            <div className='diseasecontainer'>
            {
                Agrodata.map((plant, key)=>(
                   
                            <div className='diseasecard' key={key}>
                                <div className='image'>
                                    <GiPlantRoots/>
                                </div>
                                <div className='cropname'>
                                    <h1>{plant.name}</h1>
                                </div>
                                <div className='harvestbutton' onClick={()=>{setmodaldata({status:true, name:plant.name, information:plant.information,climate:plant.climate })}}>
                                    <MdDoubleArrow/>
                                </div>   
                            </div>
                ))
            }
            </div>
            </div>
            {
                modaldata.status===true &&
                    <div className='indireportmodal'>
                    <div className='cross'><ImCross onClick={()=>setmodaldata(false)}/></div>
                    <div className='reportmodalcontent'>
                    <div className='title'>
                        <img src="../images/reportheader.png"></img><h1>Report on {modaldata.name}</h1>
                    </div>
                    <div className='reportcontent'>
                        <div className='name'><span>{modaldata.name}</span></div>
                        <p className='information'>{modaldata.information}</p>
                        
                        <div className='symptoms'>
                            <h2>Favourable Climate</h2>
                            <p>{modaldata.climate}</p>
                            

                        </div>
                    </div>
                    </div>
                </div>
                                

                        }
                    </div>
                )
}

export default Agropedia;