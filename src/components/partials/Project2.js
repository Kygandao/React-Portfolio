import React, {useState} from 'react';
import { project2Data } from '../data/projectData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Project2 = ({ slides }) => {
    const [currentImg, setCurrentImg] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? length -1 : currentImg -1)
    }

    console.log(currentImg)

    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className='slider'>
            <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide}/>
            {project2Data.map((slide, index) => {
                return (
                    <div>
                        <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                            {index === currentImg && (
                            <img src={slide.image} alt='Project Screenshot' className='image'/>
                            )}
                        </div>
                        <div>
                            <h3>Project - Note Taker</h3>
                            <p>Organize your thoughts with this Note Taker App!<br/>
                            This dynamically rendered Javascript CRUD application allows the user to store notes with a title and body for later use. An express server handles the routing and Heroku handles the deployment.<br/><br/>
                            Github Repo: <a href='https://github.com/Kygandao/Express-Note-Taker' className='link'>https://github.com/Kygandao/Express-Note-Taker</a>
                            <br/>
                            Deployed Site: <a href='https://stormy-ravine-72429.herokuapp.com/' className='link'>https://stormy-ravine-72429.herokuapp.com/</a>
                            </p>
                        </div>
                    </div>
                    
                ) 
            })}
            
        </div>
    )
}

export default Project2