import React, {useState} from 'react'
import { project3Data } from '../data/projectData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Project3 = ({ slides }) => {
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
            {project3Data.map((slide, index) => {
                return (
                    <div>
                        <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                            {index === currentImg && (
                            <img src={slide.image} alt='Project Screenshot' className='image'/>
                            )}
                        </div>
                        <div>
                            <h3>Project - Weather Dashboard</h3>
                            <p>Plan your outdoor activities with this Weather Dashboard!<br/>
                            This RESTful API pulls the current and forecasted weather conditions from the OpenWeather Weather API and dynamically renders the results to the client-side HTML. Javascript and Bootstrap are the technologies used to create the displayed information.<br/><br/>
                            Github Repo: <a href='https://github.com/Kygandao/Weather-Dashboard' className='link'>https://github.com/Kygandao/Weather-Dashboard</a>
                            <br/>
                            Deployed Site: <a href='https://kygandao.github.io/Weather-Dashboard/' className='link'>https://kygandao.github.io/Weather-Dashboard/</a>
                            </p>
                        </div>
                    </div> 
                    
                ) 
            })}
            
        </div>
    )
}

export default Project3