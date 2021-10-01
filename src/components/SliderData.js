import React from 'react';
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img3.jpg'

function Images() {
    return (
        <div>
            <img src={img1} alt="Cliff Drop" />
            <img src={img2} alt="Enduro Rider" />
            <img src={img3} alt="Downhill Racer" />
        </div>
    )
}

export default Images;