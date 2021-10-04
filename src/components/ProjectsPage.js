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
                    This application was developed using Javascript, Materialize CSS, and HTML.<br/><br/>
                    Github Repo: <a href='https://github.com/Kygandao/Pet_Locator' className='link'>https://github.com/Kygandao/Pet_Locator</a>
                    <br/>
                    Deployed Site: <a href='https://windowmac.github.io/Pet_Locator/' className='link'>https://windowmac.github.io/Pet_Locator/</a>
                    </p>
                </div>
                <div>
                    <h3 className='projectTitle'>Project - Note Taker</h3>
                    <p>Organize your thoughts with this Note Taker App!<br/>
                    This dynamically rendered Javascript CRUD application allows the user to store notes with a title and body for later use. An express server handles the routing and Heroku handles the deployment.<br/><br/>
                    Github Repo: <a href='https://github.com/Kygandao/Express-Note-Taker' className='link'>https://github.com/Kygandao/Express-Note-Taker</a>
                    <br/>
                    Deployed Site: <a href='https://stormy-ravine-72429.herokuapp.com/' className='link'>https://stormy-ravine-72429.herokuapp.com/</a>
                    </p>
                </div>
                <div>
                    <h3 className='projectTitle'>Project - Weather Dashboard</h3>
                    <p>Plan your outdoor activities with this Weather Dashboard!<br/>
                    This RESTful API pulls the current and forecasted weather conditions from the OpenWeather Weather API and dynamically renders the results to the client-side HTML. Javascript and Bootstrap are the technologies used to create the displayed information.<br/><br/>
                    Github Repo: <a href='https://github.com/Kygandao/Weather-Dashboard' className='link'>https://github.com/Kygandao/Weather-Dashboard</a>
                    <br/>
                    Deployed Site: <a href='https://kygandao.github.io/Weather-Dashboard/' className='link'>https://kygandao.github.io/Weather-Dashboard/</a>
                    </p>
                </div>
            </div>
        
        </div>
    )
}

export default ProjectsPage