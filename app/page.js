import React from 'react';
import "../styles/global.css"
import Hero from "./hero";
import HeroLower from "./hero-lower";
import Reason from "./reason";
import MeetBf from "./meetBf";
import Team from "./team";
import About from "./about";
import Footer from "./footer";

const Page = () => {
    return (
        <>
            <Hero/>
            <HeroLower/>
            <MeetBf/>
            <Reason/>
            <Team/>
            <About/>
            <Footer/>
        </>
    );
};

export default Page;