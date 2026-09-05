import React from "react";
import "../styles.css";
import ImageSwitcher from '../components/ImageSwitcher';
import CardLayout from "../components/CardLayout";


const Home = () => {
    return(
    <CardLayout>
        <div className="intro">
            
            <div className="intro-text">
                <h3>Hello and Welcome to my site...</h3>
                <h1>Calum Smyth</h1>
                <h2>Making things for your computers</h2>
                <p className="intro-paragraph">Hello and welcome. My name is Calum and I am making a career change into Software/Web Development after over 8 years of working in the NHS. I am particularly interested in Artifical Intelligence (AI) and its potential to impact on the way we work. Web3 is also an area I am keen to learn more about and its potential to change the internet as we know it.</p>
            </div>



            <ImageSwitcher/>
        </div>
</CardLayout>        
    );
}

export default Home;