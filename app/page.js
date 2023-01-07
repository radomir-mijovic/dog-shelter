import React from 'react';
import "../styles/global.css"
import Hero from "./hero";
import HeroLower from "./hero-lower";
import Reason from "./reason";
import MeetBf from "./meetBf";
import Team from "./team";

const Page = () => {
    return (
        <>
            <Hero/>
            <HeroLower/>
            <Reason/>
            <MeetBf/>
            <Team/>
        </>
    );
};

export default Page;