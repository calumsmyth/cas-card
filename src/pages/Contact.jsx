import React from 'react';
import NavBar from '../components/routing/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
    return(
    <div className="card">
        <NavBar/>
        <div class="intro">
 
        </div>

         <div className="middle">
            
            <h2>Contact me</h2>



            <h2>Contact Details</h2>
            
                <div class="content">
                    <a href="https://github.com/calumsmyth" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/calumsmyth" target="_blank">LinkedIn</a>
                    <a href="https://www.credly.com/users/calumsmyth" target="_blank">Credly</a>
                </div>
        </div> 

        <Footer/>
    </div>

    );
}

export default Contact;