import React from 'react'
import ImageSlider from './inProgressPartials/ImageSlider'
import { sliderData } from './inProgressPartials/sliderData';


const ProjectsPage = () => {
    return (
        <div>
            <div className='emptyDiv'>
                
            </div>
            <div className='projectContentDiv'>
                <h2>Projects</h2>
                <p>Listed below are a few examples of the projects I have contributed to as well as independent work.</p>
                <ImageSlider slides={sliderData}/>
            </div>
        
        </div>
    )
}

export default ProjectsPage