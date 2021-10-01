import React from 'react';
import ImageSlider from './ImageSlider'
import { sliderData } from './sliderDataTEST';

const handlePageChange = () => {
    console.log('clicked')
}

function ContentDiv() {
    return (
        <div>
        <div className='contentDiv'>
            <h3>This is the main content area</h3>
            <p>test</p>
            <div className='buttonDiv' onClick={handlePageChange}>This is a button styled div, click it and check the console!</div >
            <div>
            <ImageSlider slides={sliderData}/>
            </div>
        </div>
        
        </div>
    );
}

export default ContentDiv;