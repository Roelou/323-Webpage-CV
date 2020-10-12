import React from 'react';
import { Button } from './Buttons';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Background1.mp4" autoPlay loop muted />
            <h1>GET READY!!!</h1>
            <p style={{paddingBottom:'1em'}}>MAY CONTAIN EXPLOSIONS</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    btnStyle='btn--outline' 
                    btnSize='btn--large'
                >
                    CONTACT ME
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
