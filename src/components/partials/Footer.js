import React from 'react';
import githubIcon from '../../imgs/githubicon.png'
import linkedinIcon from '../../imgs/linkedinicon.png'
import instagramIcon from '../../imgs/instagramicon.png'

function FooterDiv() {
    return (
        <div>
            <div className='footer'>
                <p className='footerText'>Find Kygan Here!</p>
                <a href='https://github.com/Kygandao' target='_blank' rel='noreferrer'><img src={githubIcon} alt='Github Icon' className='icon'/></a>

                <a href='https://www.linkedin.com/in/kygan-dao-7a1893209/' target='_blank' rel='noreferrer'> <img src={linkedinIcon} alt='LinkedIn Icon' className='icon'/></a>

                <a href='https://www.instagram.com/kygandao/' target='_blank' rel='noreferrer'> <img src={instagramIcon} alt='Instagram Icon' className='icon'/></a>
            </div>
            <div className='emptyDiv'>

            </div>
        </div>
        
    );
}

export default FooterDiv;