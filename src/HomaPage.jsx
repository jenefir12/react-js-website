import React from 'react';
import Service from './Service';
import Portfolio from './Portfolio';
import Process from './Process';
import Why from './Why';
import Technologies from './Technologies';
import Contact from './Contact';
import Position from './Position';
import Office from './Office';
import Footer from './Footer';
import Nav from './Nav';
import Slider from './Slider';

const HomePage = () => {
    return (
        <>
        <Nav/> 
        <Slider/>
        <Service/>
        <Portfolio/>
        <Process/>
        <Why/>
        <Technologies/>
        <Contact/>
        <Position/>
        <Office/>
        <Footer/>
        </>
    )
}
export default HomePage;