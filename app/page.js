import React from 'react';
import "../styles/global.css"
import Hero from "./hero";
import HeroLower from "./hero-lower";
import Reason from "./reason";

const Page = () => {
    return (
        <>
            <Hero/>
            <HeroLower/>
            <Reason/>
        </>
    );
};

export default Page;