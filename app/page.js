import React from 'react';
import "../styles/global.css"
import Hero from "./hero";
import HeroLower from "./hero-lower";
import Reason from "./reason";
import MeetBf from "./meetBf";

const Page = () => {
    return (
        <>
            <Hero/>
            <HeroLower/>
            <Reason/>
            <MeetBf/>
        </>
    );
};

export default Page;