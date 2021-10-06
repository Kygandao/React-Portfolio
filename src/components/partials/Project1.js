import React, {useState} from 'react';
import { project1Data } from '../data/projectData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Project1 = ({ slides }) => {
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
            {project1Data.map((slide, index) => {
                return (
                    <div>
                        <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                            {index === currentImg && (
                            <img src={slide.image} alt='Project Screenshot' className='image'/>
                            )}
                        </div>
                        <div>
                            <h3>Project - Doggo Finder</h3>
                            <p>Helping you in your search for your next pet!<br/>
                            This Dog Finder application is your one stop shop for all of your adopt-a-pet needs. It works by offering the user the choice WHERE they would like to search for their new pet, WHAT specific breed they would like to search for, and a handful of other requirements, then using the Pet Finder API, displays the information for dogs in their search area that match their criteria.<br/>
                            This application was developed using Javascript, Materialize CSS, and HTML.<br/><br/>
                            Github Repo: <a href='https://github.com/Kygandao/Pet_Locator' className='link'>https://github.com/Kygandao/Pet_Locator</a>
                            <br/>
                            Deployed Site: <a href='https://windowmac.github.io/Pet_Locator/' className='link'>https://windowmac.github.io/Pet_Locator/</a>
                            </p>
                        </div>
                    </div>    
                    
                    
                ) 
            })}
            
        </div>
    )
}

export default Project1