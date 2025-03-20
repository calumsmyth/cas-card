import React from "react";
import NavBar from '../components/routing/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
return(
    <div className="card">
        <NavBar/>
        <div className="intro">

            
            <div class="about-paragraph">
                <h2>Backstory</h2>
                <p>
                I am a software and web developer with a passion for problem-solving, clean code, and innovative technology. My journey into development began with over 100 hours of self-driven study through The Odin Project, where I built a strong foundation in HTML, CSS, JavaScript, and GitHub while working full-time in the NHS. To further accelerate my transition, I enrolled in the AI-Driven Software Engineering bootcamp by Skills City, a full-time program covering React, Python, SQL, Django, APIs, AI/ML, and Cloud Computing.
                <br/>
                <br/>
                Prior to transitioning into my new line of work, I have a very STEM and healthcare related background which gives me a unique edge in software development. With a BSc (Hons) in Biomedical Science and a Postgraduate Diploma in Physician Associate Studies, I spent years in high-pressure medical environments, developing critical thinking, leadership, and adaptability. As a Lead Physician Associate, I managed teams across multiple sites, honing my ability to communicate complex ideas, collaborate effectively, and drive continuous improvement—skills that can all be transferred into the world of tech.
                <br/>
                <br/>
                I am highly motivated, detail-oriented, and a passionate individual always looking to develop my knowledge. I am looking forward to combining my established skills with my growing developer knowledge to create impactful software solutions. 
                <br/>
                <br/>
                This site is a continous work in progress as I continue to update it with my work. Please feel free to take a look at <Link to="/projects">my projects</Link> my projects page for examples of my work. 
                <br/>
                <br/>
                Should you be interested in contacting me, please refer to my social at the bottom of each page, or head over to my <Link to="/contact">contact me</Link> page for further information!
                </p>


            </div>
        </div>

        <div className="middle">
        </div>

    <Footer />
    </div>
    );
}

export default About;