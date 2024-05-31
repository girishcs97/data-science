import React from 'react';
import Header from './components/Header/header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Opportunities from './components/Opportunities/opportunities';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import FloatingButton from './components/FloatNeedAdvice/advice';
import Research from './components/Research/research';
import Faculty from './components/Faculty/faculty';
import Career from './components/Career/career'
import UGProgram from './components/Programs/ug-program';
import Major from './components/Programs/major';
import Minor from './components/Programs/minor';
import Learning from './components/Experiential Learning/learning';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/research" element={<Research />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/career" element={<Career />} />
          <Route path="/program" element={<UGProgram />} />
          <Route path="/major" element={<Major />} />
          <Route path="/minor" element={<Minor />} />
          <Route path="/explearning" element={<Learning />} />
        </Routes>
      </Router>
      <FloatingButton />
      <Footer />
    </>
  )
}
export default App;