import React from 'react';
import "../styles/global.css"
import Hero from "./hero";
import HeroLower from "./hero-lower";
import Reason from "./reason";
import MeetBf from "./meetBf";
import Team from "./team";
import About from "./about";

const Page = () => {
    return (
        <>
            <Hero/>
            <HeroLower/>
            <MeetBf/>
            <Reason/>
            <Team/>
            <About/>
        </>
    );
};

export default Page;