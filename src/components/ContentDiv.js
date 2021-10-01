import React from 'react';
import ImageSlider from './ImageSlider'
import { sliderData } from './sliderDataTEST';


function ContentDiv() {
    return (
        <div>
            <div className='contentDiv'>
                <h2>Welcome to my working portfolio.</h2>
                <p>Here you will find what you are looking for.</p>
                <ImageSlider slides={sliderData}/>
            </div>
        
        </div>
    );
}

export default ContentDiv;