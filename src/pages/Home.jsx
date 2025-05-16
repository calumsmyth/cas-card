import React from "react";
import frontOnPhoto from '../assets/images/frontOnPhoto.jpg';
import "../styles.css";
import ImageSwitcher from '../components/ImageSwitcher';
import NavBar from '../components/routing/NavBar'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'


const Home = () => {
    return(
    <div className="card">
           <HamburgerMenu />
        <div className="intro">
            
            <div className="intro-text">
                <h3>Hello and Welcome to my site...</h3>
                <h1>Calum Smyth</h1>
                <h2>Making things for your computers</h2>
                <p className="intro-paragraph">Hello and welcome. My name is Calum and I am making a career change into Software/Web Development after over 8 years of working in the NHS. I am particularly interested in Artifical Intelligence (AI) and its potential to impact on the way we work. Web3 is also an area I am keen to learn more about and its potential to change the internet as we know it.</p>
            </div>



            <ImageSwitcher/>
        </div>

        {/* <div className="middle">
            <h3 className="tech-stack-title">My Tech Stack:</h3>
            <div className="tech-stack-list">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Python</p>
                <p>SQL</p>
            </div>
        </div> */}
        <Footer />
    </div>
    );
}

export default Home;