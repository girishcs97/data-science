import React from 'react';
import Header from './components/Header/header';
import LandingPage from './components/Landingpage/landingpage';
import Mission from './components/Mission/mission';
import BackgroundVideo from './components/Video/bgvideo';
import Alumni from './components/Alumni/alumni';
import Articles from './components/Articles/articles';

const App = ()=>{
  return(
    <>
    <Header/>
    <LandingPage />
    <Mission />
    <BackgroundVideo />
    <Alumni />
    <Articles />
    </>
  )
}
export default App;