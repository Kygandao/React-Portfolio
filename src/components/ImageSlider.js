import React, {useState} from 'react';
import { sliderData } from './sliderDataTEST';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
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
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                        {index === currentImg && (
                        <img src={slide.image} alt='Biking' className='image'/>
                        )}
                        <div className='imageText'>
                            <h5>Centered text over image</h5>
                        </div>
                    </div>
                    
                ) 
            })}
            
        </div>
    )
}

export default ImageSlider
