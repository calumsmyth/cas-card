import React from 'react';
import NavBar from '../components/routing/NavBar';
import Footer from '../components/Footer';

const Projects = () => {
    return(

    <div className="card">
        <NavBar/>

    <div className="intro">
        <div className="intro-text">

            
        </div>

        
        <div className="projects-paragraph">
            <h2>Some examples of my work:</h2>
                <h3>Now To The Weather:</h3>
                <p>Here is a weather app I created in JavaScript. The focus of this project was to gain experience using APIs, JavaScript and using TailwindCSS for design.</p>
                <br/><a href="https://calumsmyth.github.io/weather-app/" target="__blank" rel="noopener noreferrer">Weather App</a>
                <h3>Lets See Paul Allen's.... I Mean Calum's Card </h3>
                <p>I have been reworking my website as a React project. The initial version, which was a mimic of this website can be seen below. But I have now made an alternate version which can be found here:</p>
                <br/><a href="https://calumsmyth.github.io/CAS/" target="_blank" rel="noopener noreferrer">CAS Alternate App</a>
                <h3>Reacting To The Challenge...</h3>
                <p>This very website is my first fully fleshed out project. I have also made a React app version which can be found here:</p>
                <br/><a href="https://cas-app-steel.vercel.app/" target="_blank" rel="noopener noreferrer">React version</a>
                <h3>Cooking Up a Storm!</h3>
                <p>I wanted to keep all of my favourite, healthy meal preperations, which are perfect for those gym gains, all in one place. So I decided to make a website to host them on called 'Gym Meal Preperations'. I will be looking to make a React version of this too. While still being worked on, you can find this bun in the oven here:</p>
                <br/><a href="https://calumsmyth.github.io/gmp/" target="'_blank" rel="noopener noreferrer">Gym Meal Preparations</a>
                

        </div>

        
    </div>
    {/* <div class="title">
        <h1>PROJECTS</h1>
    </div> */}
{/* 
    // <div class="nav-bar">
    //     <div class = "nav-bar-buttons">
    //         <a href="../index.html" class="button">Home</a>
    //         <a href="./about.html" class="button">About</a>
    //         <a href="./contact.html" class="button">Contact</a>
    //         <a href="./my-projects.html" class="button">My Projects</a>
    //     </div> 
    //  </div>

     <div class="intro">

        
     </div>

     <div class="footer">
        <h4>Please see my socials:</h4>
        <div class="socials">
            <a href="https://github.com/calumsmyth" target="_blank"><img src="../images/GitHub_Logo.svg" alt="An image of the GitHub logo. A black circle with the outline of a cat inside." style= "max-width: 30px; height: auto;">GitHub</a>
            <a href="https://www.linkedin.com/in/calumsmyth" target="_blank"><img src="../images/LinkedIn-Logo.png" alt="An image of the LinkedIn logo. A square with the word 'in' inside." style = "max-width: 38px ; height:auto;" href="https://www.linkedin.com/in/calumsmyth" target="_blank">LinkedIn</a>
        </div>
    </div> */}
    
    {/* <div className="middle">
    
    </div> */}

    <Footer/>
    </div>



    );
}

export default Projects