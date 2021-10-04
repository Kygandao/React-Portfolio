import React from 'react'
import ImageSlider from './partials/ImageSlider'
import { sliderData } from './data/sliderData';


const ProjectsPage = () => {
    return (
        <div className='projectsPage'>
            <div className='emptyDiv'>
                
            </div>
            <div className='projectContentDiv'>
                <h2>Projects</h2>
                <p>Listed below are a few examples of the projects I have contributed to as well as independent work.</p>
                <ImageSlider slides={sliderData}/>
            </div>
            <div className='projectDescriptions'>
                <div>
                    <h3>Project - Doggo Finder</h3>
                    <p>Helping you in your search for your next pet!<br/>
                    This Dog Finder application is your one stop shop for all of your adopt-a-pet needs. It works by offering the user the choice WHERE they would like to search for their new pet, WHAT specific breed they would like to search for, and a handful of other requirements, then using the Pet Finder API, displays the information for dogs in their search area that match their criteria.<br/>
                    This application was developed using Javascript, Materialize CSS, and HTML.
                    </p>
                </div>
                <div>
                    <h3 className='projectTitle'>Project - Note Taker</h3>
                    <p>Organize your thoughts with this Note Taker App!<br/>
                    CRUD application
                    </p>
                </div>
                <div>
                    <h3 className='projectTitle'>Project - Weather Dashboard</h3>
                    <p>Plan your outdoor activities with this Weather Dashboard!<br/>
                    
                    </p>
                </div>
            </div>
        
        </div>
    )
}

export default ProjectsPage