import React from 'react';
import githubIcon from '../../imgs/githubicon.png'
import linkedinIcon from '../../imgs/linkedinicon.png'

function FooterDiv() {
    return (
        <div className='footer'>
            <p className='footerText'>Find Kygan Here!</p>
            <img src={githubIcon} alt='Github Icon' className='icon'/>
            <img src={linkedinIcon} alt='LinkedIn Icon' className='icon'/>
        </div>
        
    );
}

export default FooterDiv;