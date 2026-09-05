import React from 'react';
import Footer from '../components/Footer';
import HamburgerMenu from '../components/HamburgerMenu'
import Expander from '../components/Expander'

const Projects = () => {
    return(

    <div className="card">
        <HamburgerMenu />
    <div className="intro">
        
        <div className="projects-paragraph">
            <h2>Some examples of my work:</h2>
            <Expander title="Weather App">
                <h3>Now To The Weather:</h3>
                <p>Here is a weather app I created in JavaScript. The focus of this project was to gain experience using APIs, JavaScript and using TailwindCSS for design.</p>
                <br/><a href="https://calumsmyth.github.io/weather-app/" target="__blank" rel="noopener noreferrer">Weather App</a>
            </Expander> 
            <Expander title="Recipe Site (Vite)">
                <h3>Cooking Up a Storm!</h3>
                <p>Initially, I created a simple HTML recipe site for my convenience. Having somewhere to access healthy meal prep recipes that I could easily access from my phone.</p>
                <p>I wanted to create a more interactive and more modern version. Having used React for my personal page, I wanted to try Vite. I also wanted to gain practice developing an adaptive site that works well on both PC and mobile devices.</p>
                <p>This is my most recent project, which is still in early development, but I already feel it is has a more professional feel than its predecessor.</p>
                <br/><a href="https://gmpv.vercel.app/" target="_blank" rel="noopener noreferrer">React Version of Gym Meal Preparations</a>
            </Expander>
            <Expander title="Recipe Site (HTML Version)">
                <h3>Let's look back</h3>
                <p>I wanted to keep all of my favourite, healthy meal preparations, which are perfect for those gym gains, all in one place. So I decided to make a website to host them on called 'Gym Meal Preparations'. I will be looking to make a React version of this too. While still being worked on, you can find this bun in the oven here:</p>
                <br/><a href="https://calumsmyth.github.io/gmp/" target="'_blank" rel="noopener noreferrer">Gym Meal Preparations</a>
            </Expander>               
            <Expander title="Alternate Personal Site - React Version">   
                <h3>Reacting To The Challenge...</h3>
                <p>This was my first React project, where I tasked myself with converting the older HTML version into a more modern one. I soon realised that starting an entire new project would be a better choice, but I like to be able to show the progress from where it started.</p>
                <p>The older React app version which can be found here:</p>
                <br/><a href="https://cas-app-steel.vercel.app/" target="_blank" rel="noopener noreferrer">React version</a>
            </Expander> 
            <Expander title="Alternate Personal Site - HTML Version">
                <h3>Let's REALLY go back</h3>
                <p>This was my very first attempt at creating a personal website, initially creating it in HTML, before I created a React version. This version is practically identical to the above React version.</p>
                <p>Once again, I like to keep it for reference of where I started from.</p>
                <p>The HTML version can be found here:</p>
                <br/><a href="https://calumsmyth.github.io/CAS/" target="_blank" rel="noopener noreferrer">CAS Alternate App</a>
            </Expander>   
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