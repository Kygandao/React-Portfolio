import React from "react";

const handlePageChange = () => {
    console.log('clicked button')
}

function Navbar() {
    return (
        <div className='navbarDiv'>
            <div className='emptyNav'>

            </div>
            <div className='navButtonContainer'>
                <div className='navButtonDiv' onClick={handlePageChange}>
                    <p>Home</p>
                </div>
                <div className='navButtonDiv' onClick={handlePageChange}>
                    <p>About</p>
                </div>
                <div className='navButtonDiv' onClick={handlePageChange}>
                    <p>Projects</p>
                </div>
                <div className='navButtonDiv' onClick={handlePageChange}>
                    <p>Contact</p>
                </div>
            </div>
            <div className='emptyNav'>

            </div>
        </div>
    )
}
export default Navbar;