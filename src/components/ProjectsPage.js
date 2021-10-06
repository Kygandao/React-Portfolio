import React from 'react'
import { project1Data, project2Data, project3Data } from './data/projectData';
import Project1 from './partials/Project1';
import Project2 from './partials/Project2';
import Project3 from './partials/Project3';


const ProjectsPage = () => {
    return (
        <div className='projectsPage'>
            <div className='emptyDiv'>
                
            </div>
            <div className='projectContentDiv'>
                <h2>Projects</h2>
                <p>Listed below are a few examples of the projects I have contributed to as well as independent work.</p>
            </div>
            <div className='projectCardsDisplay'>
                <div className='projectCard'>
                    <Project1 slides={project1Data}/>
                </div>
                <div className='projectCard'>
                    <Project2 slides={project2Data}/>
                </div>
                <div className='projectCard'>
                    <Project3 slides={project3Data}/>   
                </div>
            </div>
        
        </div>
    )
}

export default ProjectsPage