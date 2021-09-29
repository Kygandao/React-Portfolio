import React from 'react';

const handlePageChange = () => {
    console.log('clicked')
}

function ContentDiv() {
    return (
        <div className='contentDiv'>
            <h3>Hello Again World</h3>
            <div className='buttonDiv' onClick={handlePageChange}>This is a button styled div, click it and check the console!</div >
        </div>
    );
}

export default ContentDiv;