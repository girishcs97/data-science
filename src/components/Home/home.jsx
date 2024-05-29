import React from 'react';
import LandingPage from '../Landingpage/landingpage'
import Mission from '../Mission/mission'
import Program from '../Programs/program';
import BackgroundVideo from '../Video/bgvideo';
import Alumni from '../Alumni/alumni';
import Articles from '../Articles/articles';
import ResearchLanding from '../Landingpage/researchLanding';

const Home = () => {
    return (
        <>
            <LandingPage />
            <Mission />
            <Program />
            {/* <BackgroundVideo /> */}
            <ResearchLanding />
            <Alumni />
            {/* <Articles /> */}
        </>
    )
}
export default Home