import React from 'react';
import NavBar from '../components/routing/NavBar'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'

const Contact = () => {
    return(
    <div className="card">
        <HamburgerMenu />
         <div className="middle">
            
            <h2>Contact me</h2>



            <h2>Contact Details</h2>
            
                <div class="content">
                    <a href="https://github.com/calumsmyth" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <br/>
                    <a href="https://www.linkedin.com/in/calumsmyth" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <br/>
                    <a href="https://www.credly.com/users/calumsmyth" target="_blank" rel="noopener noreferrer">Credly</a>
                </div>
        </div> 

        <Footer/>
    </div>

    );
}

export default Contact;